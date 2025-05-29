import { ExportFileRequest, ExportFileRequestBody } from '../grpc-web/MCAPI_Types_pb.js';
import { CommandErrorType } from '../grpc-web/MCAPI_Types_pb.js';
import { displayText, displayTextDebug, displayTextError, displayTextFine, displayTextInfo, displayTextWarn, updateMessageInput } from './index.js';
import { getSequenceWaveAudioExportSettingsName, getWaveAudioExportSettingsName } from './create-settings';
import { registerTaskPath } from './utils.js';  



let exportAudioToFile = function(mcapiclient, mob_id, mobType, destinationPath, fileName) {
    displayTextDebug("exportToFile: " + mob_id + ", mobType: " + mobType + ", destinationPath: " + destinationPath + ", fileName: " + fileName);
    updateMessageInput("Processing: Preparing export for " + fileName);

    let request = new ExportFileRequest();
    let exportFileRequestBody = new ExportFileRequestBody();
    exportFileRequestBody.setMobId(mob_id);
    let exportSettingsName = "";

    if (mobType == "sequence")
        exportSettingsName = getSequenceWaveAudioExportSettingsName();
    else if (mobType == "masterclip" || mobType == "subclip")
        exportSettingsName = getWaveAudioExportSettingsName();
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
            if (response && response.getHeader()) {
                const header = response.getHeader();
                displayTextDebug(`File export request submitted successfully. taskID: ${header.getTaskId()}, status: ${header.getStatus()}, progress: ${header.getProgress()}`);
                registerTaskPath(header.getTaskId(),  destinationPath + "/" + fileName + ".wav");
            } else {
                displayTextError("Error: Export Response header is missing or invalid.");
            }
            updateMessageInput("Status: Export started successfully");
        }
    });
};

export { 
    exportAudioToFile
};