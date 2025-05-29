// index.js - Complete implementation for Media Composer integration

// Import necessary modules for gRPC communication with Media Composer
import { 
    GetOpenProjectInfoRequest, GetOpenProjectInfoRequestBody,
    GetListOfBinItemsRequest, GetListOfBinItemsRequestBody,
    GetBinsRequest, GetBinsRequestBody, GetBinsFlag,
    GetBinInfoRequest, GetBinInfoRequestBody,
    OpenBinRequest, OpenBinRequestBody,
    CloseBinRequest, CloseBinRequestBody,
    ExportFileRequest, ExportFileRequestBody,
    GetMobInfoRequest, GetMobInfoRequestBody,
    CommandErrorType
} from '../grpc-web/MCAPI_Types_pb.js';
import { MCAPIClient } from '../grpc-web/MCAPI_grpc_web_pb.js';
import { Mutex } from 'async-mutex';
import { importFileIntoImportBin } from './import-to-bin.js';
import { createSettings} from './create-settings.js';
import { getActiveSequenceId, nullMobId } from './get-active-service.js';
import { exportAudioToFile } from './export-audio.js';   
import { exportVideoToFile } from './export-video.js';
import { getPathByTaskId } from './utils.js';
import { get } from 'lodash';


// Constants for MIME types
const MCAPI_ASSETLIST_MIME_TYPE = 'text/x.avid.mc-api-asset-list+json';
const MCAPI_PLUGIN_ASSET_LIST_MIME_TYPE = 'text/x.avid.panel-sdk-plugin-asset-list+json';

// Initialize variables
let mcapiclient = null;
let binReferenceCounts = {};
const mutex = new Mutex();
let currentExportPath = "D:/DND-POC"; // Default export path
let exportName = "";
let exportVideo = false;

// Log level constants
export const logFine = 0;
export const logDebug = 1;
export const logInfo = 2;
export const logWarn = 3;
export const logError = 4;

// Default log level
export let logLevel = logDebug;

// DOM elements
let dropArea, droppedContent, outputArea, submitButton, messageInput;

// Initialize the application
function initApp() {
    console.log("Initializing application...");
    
    // Setup MCAPI client
    if (typeof mcapi !== 'undefined') {
        mcapiclient = new MCAPIClient(mcapi.getGatewayServerAddress(), null, null);
    }

    // Get DOM elements
    dropArea = document.getElementById('drop-zone');
    outputArea = document.getElementById('output-area');
    submitButton = document.getElementById('submit-button');
    messageInput = document.getElementById('message-input');
    const sendMessageButton = document.getElementById('send-message-button');
    const clearMessageButton = document.getElementById('clear-message-button');
    
    // Setup event listeners
    if (submitButton) {
        submitButton.onclick = activeSequence_submit;
        displayTextDebug("Submit button listener attached");
    } else {
        displayTextWarn("Submit button not found");
    }
    
    if (sendMessageButton) {
        sendMessageButton.onclick = function() {
            const message = messageInput.value.trim();
            if (message) {
                sendMessage(message);
                messageInput.value = '';
            }
        };
        displayTextDebug("Send message button listener attached");
    } else {
        displayTextWarn("Send message button not found");
    }
    
    if (clearMessageButton) {
        clearMessageButton.onclick = function() {
            messageInput.value = '';
            messageInput.focus();
        };
        displayTextDebug("Clear button listener attached");
    } else {
        displayTextWarn("Clear button not found");
    }
    
    setupDragAndDropListeners();
    
    // Handle message input if Enter key is pressed
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const message = messageInput.value.trim();
                if (message) {
                    sendMessage(message);
                    messageInput.value = '';
                }
            }
        });
        displayTextDebug("Message input keypress listener attached");
    } else {
        displayTextWarn("Message input not found");
    }
 
    displayTextInfo("Media Composer integration initialized");
}

// Function to send message from the text input
function sendMessage(message) {
    displayTextDebug(`Sending message: ${message}`);
    
    // You can add actual message sending functionality here
    // For example, if you want to send this as a command or notification to Media Composer
    if ("video" === message) {
        exportVideo = true;
        displayTextDebug("Export video set to true");
    } else if ("audio" === message) {
        exportVideo = false;
        displayTextDebug("Export video set to false");
    } else if (message  === "clear") {
        exportName = "";
        displayTextDebug("Export name cleared");
        updateMessageInput("Processing: Cleared export name");
    } else {
        exportName = message;
        updateMessageInput("Processing: " + message);
    }
    
}

// Function to update the message input with text from JavaScript
function updateMessageInput(text) {
    if (messageInput) {
        messageInput.value = text;
        // Optional: trigger "input" event to notify any listeners that the value has changed
        messageInput.dispatchEvent(new Event('input'));
    }
}

// Set up drag and drop event listeners
function setupDragAndDropListeners() {
    displayTextDebug("Setting up drag and drop listeners");
    
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        if (dropArea) {
            dropArea.addEventListener(eventName, preventDefaults, false);
            displayTextDebug(`Added ${eventName} listener to drop area`);
        }
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area
    ['dragenter', 'dragover'].forEach(eventName => {
        document.body.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        document.body.addEventListener(eventName, unhighlight, false);
    });

    // Handle drops
    if (dropArea) {
        dropArea.addEventListener('drop', handleMediaComposerDrop, false);
        displayTextDebug("Added drop handler to drop area");
    }
    document.body.addEventListener('drop', handleMediaComposerDrop, false);
    displayTextDebug("Added drop handler to body");
}

// Prevent default events
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight drop area
function highlight(e) {
    document.body.classList.add('highlight');
}

// Remove highlight from drop area
function unhighlight(e) {
    document.body.classList.remove('highlight');
}

// Handle drag from Media Composer to our app
async function handleMediaComposerDrop(e) {
    const dt = e.dataTransfer;
    displayTextDebug('Media Composer drop event detected: ' + dt.types);
    let parsedData = null;

    // Check for Avid's specific format
    if (dt.types.includes(MCAPI_ASSETLIST_MIME_TYPE) || 
        dt.types.includes(MCAPI_PLUGIN_ASSET_LIST_MIME_TYPE)) {

        displayTextDebug('Media Composer data detected');
        
        // Determine which MIME type to use
        const mimeType = dt.types.includes(MCAPI_ASSETLIST_MIME_TYPE) ? 
            MCAPI_ASSETLIST_MIME_TYPE : MCAPI_PLUGIN_ASSET_LIST_MIME_TYPE;
        
        const jsonData = dt.getData(mimeType);
        displayTextDebug(jsonData);
        parsedData = JSON.parse(jsonData);
    } else {
        displayTextError("Dropped item format not recognized");
        return;
    }

    try {
        displayTextDebug('Attempting to create settings...');
        await createSettings(mcapiclient);
        displayTextInfo('Settings created successfully');
    } catch (error) {
        displayTextError(`Error creating settings: ${error.message}`);
    }

    try {
        displayTextDebug('Processing dropped data... ' + dt.types);
        
        // Process the dropped clips
        parsedData.forEach(element => {
            let id = element["id"];
            let head = element["head"];
            let inMark = element["in"];
            let outMark = element["out"];
            let systemID = element["systemID"];
            let systemType = element["systemType"];
            let type = element["type"];

            displayTextDebug("id: " + id)
            displayTextDebug("head: " + head)
            displayTextDebug("systemID: " + systemID)
            displayTextDebug("systemType: " + systemType)
            displayTextDebug("type: " + type)

            getMobInfoThenExport(id, type);
        });
            
    } catch (error) {
        displayTextError(`Error processing dropped data: ${error.message}`);
    }
}

async function getMobInfoThenExport(mob_id, mobType) {
    displayTextDebug("getMobInfoThenExport: " + mob_id);
    var mobName = mob_id;
    var request = new GetMobInfoRequest();

    let requestBody = new GetMobInfoRequestBody();
    const only_visible_columns = false;
    const includes_empty_columns = false; 
    requestBody.setMobId(mob_id);
    requestBody.setOnlyVisibleColumns(only_visible_columns);
    requestBody.setIncludesEmptyColumns(includes_empty_columns);

    request.setBody(requestBody);

    let stream = mcapiclient.getMobInfo(request, getMetadata());
    stream.on('data', (response) => {
        let columnName = response.getBody().getColumnName();
        if (columnName == "Name") {
            mobName = response.getBody().getColumnValue();
        }
    });

    stream.on('error', (err) => {
        const errMessage = `Unexpected stream error: code = ${err.code}` +
        `, message = "${err.message}"`;
        displayTextError(errMessage);
        mcapi.reportError(err.code, err.message);
    });
    stream.on('status', (status) => {
        displayTextFine(status);
    });
    stream.on('end', () => {
        let exportFileName = mobName;
        if (exportName != "") {
            exportFileName = exportName;
        }
        displayTextInfo(`Completed, export fileName: ${exportFileName}`);
        let exportSuccess = false;
        if (exportVideo) {
            exportSuccess = exportVideoToFile(mcapiclient, mob_id, mobType, currentExportPath, exportFileName);
        } else {
            exportSuccess = exportAudioToFile(mcapiclient, mob_id, mobType, currentExportPath, exportFileName);
        }
    });
}


// Get metadata for API calls
function getMetadata() {
    return {
        accessToken: typeof mcapi !== 'undefined' ? mcapi.getAccessToken() : 'sample-token'
    };
}

// Display text in the output area
function displayTextCore(text) {
    console.log(text);
    if (outputArea) {
        const node = document.createTextNode(text);
        outputArea.appendChild(node);
        outputArea.appendChild(document.createElement("br"));
/*
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        paragraph.style.margin = '4px 0';
        outputArea.appendChild(paragraph);
        outputArea.scrollTop = outputArea.scrollHeight; // Auto-scroll to bottom
*/
        // If the text is a progress or status update, also show it in the message input
        const textStr = String(text);
        if (
            textStr.startsWith('Export') ||
            textStr.startsWith('Processing') ||
            textStr.toLowerCase().includes('progress') ||
            textStr.toLowerCase().includes('status')
        ) {
            updateMessageInput(textStr);
        }
    }
}

/**
 * Display text in the output area (legacy function)
 * @param {string} text - The text to display
 */
function displayText(text) {
    displayTextInfo(text);
}

/**
 * Display text at FINE level 
 * @param {string} text - The text to display
 */
function displayTextFine(text) {
    if (logLevel <= logFine) {
        displayTextCore(text);
    }
}

/**
 * Display text at DEBUG level
 * @param {string} text - The text to display
 */
function displayTextDebug(text) {
    console.log(`log level: ${logLevel}, logDebug: ${logDebug}`);
    if (logLevel <= logDebug) {
        displayTextCore(text);
    }
}

/**
 * Display text at INFO level
 * @param {string} text - The text to display
 */
function displayTextInfo(text) {
    if (logLevel <= logInfo) {
        displayTextCore(text);
    }
}

/**
 * Display text at WARN level
 * @param {string} text - The text to display
 */
function displayTextWarn(text) {
   if (logLevel <= logWarn) {
        displayTextCore(text);
    }
}

/**
 * Display text at ERROR level
 * @param {string} text - The text to display
 */
function displayTextError(text) {
    if (logLevel <= logError) {
        displayTextCore(text);
    }
}

// Clean up on page unload
function unload() {
    console.log('Page unloading, cleaning up...');
    // Any cleanup needed
    return;
}

function onExportFileFinished(taskId, exportPath, errorString, errorCode) {
    displayTextDebug("Export file finished");
    if (errorCode == CommandErrorType.NOERROR) {
        let importPath = exportPath;
        let tmpPath = getPathByTaskId(taskId);
        if (null != tmpPath) {
            displayTextDebug("Export file finished, getting path from registry - taskId: " + taskId + ", path: " + tmpPath);
            importPath = tmpPath;
        }
        displayTextDebug("Export file finished successfully. Path: " + importPath);
        updateMessageInput("Success: Export completed - " + importPath);
        displayTextDebug("calling import function");
        updateMessageInput("Processing: Importing to Processed Clips bin...");
        importFileIntoImportBin(mcapiclient, importPath);
        return;
    }
    else {      
        let errorMessage = `Unexpected error: ErrorType = ${errorCode}` + `, message = "${errorString}"`;
        displayTextError("Export error: " + errorMessage);
        updateMessageInput("Error: Export failed - " + errorString);
    }
}

function registerNotifications() {
    if (typeof mcapi !== 'undefined' && mcapi.onEvent) {
        mcapi.onEvent.connect(function (eventName, eventData) {
            displayTextDebug("Event received: " + eventName);
            switch (eventName) {
                case "ExportFileFinished":
                    {
                        const jsonData = JSON.parse(eventData);
                        displayTextDebug("ExportFileFinished event received" + JSON.stringify(jsonData));
                        
                        displayTextDebug("jsonData.taskId: " + jsonData.taskId);
                        onExportFileFinished(jsonData.taskId, jsonData.exportPath, jsonData.errorString, jsonData.errorCode);
                    }
                    break;
                default:
                    break;
            }
        });
        console.log("Notifications registered");
    } else {
        console.log("mcapi or mcapi.onEvent not available, notifications not registered");
    }
}

// Modified for various status updates
async function activeSequence_submit() {
    displayTextDebug("Sending active sequence...");
    updateMessageInput("Processing: Getting active sequence...");

    try {
        updateMessageInput("Processing: Creating settings...");
        await createSettings(mcapiclient);
        displayTextDebug('Settings created successfully');
    } catch (error) {
        displayTextError(`Error creating settings: ${error.message}`);
        updateMessageInput("Error: Failed to create settings");
        return;
    }

    updateMessageInput("Processing: Getting sequence ID...");
    getActiveSequenceId(mcapiclient).then((mobId) => { 
        displayTextDebug("Exporting sequence: " + mobId);
        updateMessageInput("Processing: Exporting sequence " + mobId);
        getMobInfoThenExport(mobId, "sequence");
    }
    ).catch((error) => {
        displayTextError("Error getting active sequence ID: " + error);
        updateMessageInput("Error: Failed to get sequence ID");
        return;
    });
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded, initializing app");
    initApp();
});

// Register notifications when window loads
window.addEventListener('load', function() {
    console.log("Window loaded, registering notifications");
    registerNotifications();
});

// Export functions needed by other modules
export { 
    displayText,
    displayTextFine,
    displayTextDebug,
    displayTextInfo,
    displayTextWarn,
    displayTextError, 
    getMetadata, 
    handleMediaComposerDrop,
    updateMessageInput,
    unload
};