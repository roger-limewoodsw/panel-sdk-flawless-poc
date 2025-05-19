import { CreateBinRequest, CreateBinRequestBody } from '../grpc-web/MCAPI_Types_pb.js';
import { ImportFileRequest, ImportFileRequestBody } from '../grpc-web/MCAPI_Types_pb.js';
import { OpenBinRequest, OpenBinRequestBody } from '../grpc-web/MCAPI_Types_pb.js';
import { CloseBinRequest, CloseBinRequestBody } from '../grpc-web/MCAPI_Types_pb.js';
import { MCAPIClient } from '../grpc-web/MCAPI_grpc_web_pb.js';

import { getMetadata } from './index.js';
import { displayText, displayTextDebug, displayTextError, displayTextFine, displayTextInfo, displayTextWarn} from './index.js';
import { getImportSettingsName, updateMessageImput } from './create-settings.js';


var eisonBinName = "ESION processed.avb";


var openBin = function (mcapiclient, binName, callback) {
    displayTextDebug("opening Acclaim bin...");
    const request = new OpenBinRequest();
    const body = new OpenBinRequestBody();
    body.setBinPath(binName);
    request.setBody(body);

    displayTextDebug("calling mcapiclient.openBin()...");

    mcapiclient.openBin(request, getMetadata(), (err, response) => {
        displayTextDebug("mcapiclient.openBin() callback called...");
        if (err) {
            displayTextError("Error opening bin: " + err);
            callback(false); // Bin does not exist
        } else {
            displayTextDebug("Bin opened successfully.");
            callback(true); // Bin exists
        }
    });
}

var createBin = function (mcapiclient, binName, callback) {
    const openBinOption = CreateBinRequestBody.OpenBinOption.LASTACTIVEBINCONTAINER;
    const request = new CreateBinRequest();
    const body = new CreateBinRequestBody();
    body.setBinName(binName);
    body.setFolderPath("");
    body.setOption(openBinOption);
    request.setBody(body);

    mcapiclient.createBin(request, getMetadata(), (err, response) => {
        if (err) {
            displayTextError("Error creating bin: " + err);
            callback(false);
        } else {
            displayTextDebug("Bin created successfully.");
            callback(true);
        }
    });
}

var importFile = function (mcapiclient, filepath, binName) {
    const request = new ImportFileRequest();
    displayTextDebug("Importing file: " + filepath + " into bin: " + binName);
    const body = new ImportFileRequestBody();
    body.setFilePath(filepath);
    body.setImportSettingsName(getImportSettingsName());
    body.setDestinationBin(binName);
    request.setBody(body);

    mcapiclient.importFile(request, getMetadata(), (err, response) => {
        if (err) {
            displayTextError("Error importing file: " + err);
        } else {
            displayTextDebug("File import submitted successfully.");
        }
    });
}

//export var importFileIntoAcclaimBin = function(mcapiclient, filepath) {
export function importFileIntoAcclaimBin(mcapiclient, filepath) {
    displayTextDebug("Importing file into Acclaim bin..." + filepath);
    openBin(mcapiclient, eisonBinName, (binExists) => {
        displayTextDebug("ifia: openBin callback called...");
        if (binExists) {
            displayTextDebug("Bin exists.");
            importFile(mcapiclient, filepath, eisonBinName);
        } else {
            displayTextDebug("Bin does not exist, creating it. " + eisonBinName);
            createBin(mcapiclient, eisonBinName, (binCreated) => {
                if (binCreated) {
                    displayTextDebug("Bin created successfully, importing file.");
                    importFile(mcapiclient, filepath, eisonBinName);
                } else {
                    displayTextError("Failed to create bin.");
                }
            });
        }
    });
};