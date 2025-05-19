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
import { importFileIntoAcclaimBin } from './import-to-bin.js';
import { createSettings, getExportSettingsName, getSequenceExportSettingsName } from './create-settings.js';
import { getActiveSequenceId, nullMobId } from './get-active-service.js';

// Constants for MIME types
const MCAPI_ASSETLIST_MIME_TYPE = 'text/x.avid.mc-api-asset-list+json';
const MCAPI_PLUGIN_ASSET_LIST_MIME_TYPE = 'text/x.avid.panel-sdk-plugin-asset-list+json';

// Initialize variables
let mcapiclient = null;
let binReferenceCounts = {};
const mutex = new Mutex();
let currentExportPath = "D:/DND-POC"; // Default export path
let exportName = "";

// Log level constants
export const logFine = 0;
export const logDebug = 1;
export const logInfo = 2;
export const logWarn = 3;
export const logError = 4;

// Default log level
export let logLevel = logInfo;

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
 
    displayText("Media Composer integration initialized");
}

// Function to send message from the text input
function sendMessage(message) {
    displayTextDebug(`Sending message: ${message}`);
    
    // You can add actual message sending functionality here
    // For example, if you want to send this as a command or notification to Media Composer
    
    exportName = message;
    updateMessageInput("Processing: " + message);
    
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

let getMobInfoThenExport = function(mob_id, mobType) {
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

        exportToFile(mob_id, mobType, currentExportPath, exportFileName);
    });
}

let exportToFile = function(mob_id, mobType, destinationPath, fileName) {
    displayTextDebug("exportToFile: " + mob_id + ", mobType: " + mobType + ", destinationPath: " + destinationPath + ", fileName: " + fileName);
    updateMessageInput("Processing: Preparing export for " + fileName);

    let request = new ExportFileRequest();
    let exportFileRequestBody = new ExportFileRequestBody();
    exportFileRequestBody.setMobId(mob_id);
    let exportSettingsName = "";

    if (mobType == "sequence")
        exportSettingsName = getSequenceExportSettingsName();
    else if (mobType == "masterclip" || mobType == "subclip")
        exportSettingsName = getExportSettingsName();
    else {
        displayTextError("Unknown mobType: " + mobType);
        updateMessageInput("Error: Unknown media type - " + mobType);
        return;
    }

    displayTextDebug("exportSettingsName: " + exportSettingsName);
    updateMessageInput("Processing: Exporting with " + exportSettingsName + " settings...");

    exportFileRequestBody.setExportSettingsName(exportSettingsName);
    exportFileRequestBody.setDestinationPath(destinationPath);
    exportFileRequestBody.setInDirectory("");
    exportFileRequestBody.setFileName(fileName);

    request.setBody(exportFileRequestBody);

    let md = {
        accessToken: mcapi.getAccessToken()
    };
    // Export to file and display path (or error message in the case of failure).
    mcapiclient.exportFile(request, md, (err, response) => {
        if (err) {
            // If message can be converted to JSON we should use ErrorType from .proto
            try {
                const jsonData = JSON.parse(err.message);

                switch (jsonData.ErrorType) {
                    case CommandErrorType.MC_EXPORTSETTINGSNOTFOUND:
                        {
                            console.log(jsonData.ErrorMessage);
                            let errorMessage = `Unexpected error: ErrorType = ${jsonData.ErrorType}` + `, message = "${jsonData.ErrorMessage}"`;
                            displayTextError("Export error: " + errorMessage);
                            updateMessageInput("Error: Export settings not found");
                        }
                        break;
                        
                    default:
                        displayTextError("Export error: " + jsonData.ErrorMessage);
                        updateMessageInput("Error: " + jsonData.ErrorMessage);
                        break;
                }

            } catch (error) { // if message is not JSON we should use gRPC error codes
                let errorMessage = `Unexpected error: Code = ${err.code}` + `, message = "${err.message}"`;
                displayTextError("Export error: " + errorMessage);
                updateMessageInput("Error: Export failed with code " + err.code);

                // For err.code we should use gRPC status codes https://grpc.github.io/grpc/core/md_doc_statuscodes.html
                switch (err.code) {
                    case 3: // (DATA_LOSS)
                        {
                            let errorMessage = `Unexpected error: ErrorType = ${jsonData.ErrorType}` + `, message = "${jsonData.ErrorMessage}"`;
                            displayTextError("Export error: " + errorMessage);
                            updateMessageInput("Error: Data loss during export");
                        }
                        break;
                        
                    default:
                        break;
                }

                // Inform Media Composer of errors as Media Composer may not receive the request at all due to some components is offline
                mcapi.reportError(err.code, err.message);
            }            
        } else {
            // Display path to file.
            displayTextDebug("Export file start successfully.");
            updateMessageInput("Status: Export started successfully");
        }
    });
};

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

function onExportFileFinished(exportPath, errorString, errorCode) {
    displayText("Export file finished");
    if (errorCode == CommandErrorType.NOERROR) {
        displayText("Export file finished successfully. Path: " + exportPath);
        updateMessageInput("Success: Export completed - " + exportPath);
        displayText("calling import function");
        updateMessageInput("Processing: Importing to Acclaim bin...");
        importFileIntoAcclaimBin(mcapiclient, exportPath);
        return;
    }
    else {      
        let errorMessage = `Unexpected error: ErrorType = ${errorCode}` + `, message = "${errorString}"`;
        displayText("Export error: " + errorMessage);
        updateMessageInput("Error: Export failed - " + errorString);
    }
}

function registerNotifications() {
    if (typeof mcapi !== 'undefined' && mcapi.onEvent) {
        mcapi.onEvent.connect(function (eventName, eventData) {
            displayText("Event received: " + eventName);
            switch (eventName) {
                case "ExportFileFinished":
                    {
                        const jsonData = JSON.parse(eventData);
                        displayText("jsonData.taskId: " + jsonData.taskId);
                        onExportFileFinished(jsonData.exportPath, jsonData.errorString, jsonData.errorCode);
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
    displayText("Sending active sequence...");
    updateMessageInput("Processing: Getting active sequence...");

    try {
        updateMessageInput("Processing: Creating settings...");
        await createSettings(mcapiclient);
        displayText('Settings created successfully');
    } catch (error) {
        displayText(`Error creating settings: ${error.message}`);
        updateMessageInput("Error: Failed to create settings");
        return;
    }

    updateMessageInput("Processing: Getting sequence ID...");
    getActiveSequenceId(mcapiclient).then((mobId) => { 
        displayText("Exporting sequence: " + mobId);
        updateMessageInput("Processing: Exporting sequence " + mobId);
        getMobInfoThenExport(mobId, "sequence");
    }
    ).catch((error) => {
        displayText("Error getting active sequence ID: " + error);
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