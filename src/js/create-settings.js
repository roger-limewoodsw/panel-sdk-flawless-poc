import { LoadSettingRequest, LoadSettingRequestBody } from '../grpc-web/MCAPI_Types_pb.js';

import { getMetadata } from './index.js';
import { displayText, displayTextDebug, displayTextError, displayTextFine, displayTextInfo, displayTextWarn} from './index.js';
import { Mutex } from 'async-mutex';

import { getImportSettingsXml } from './import-settings.js';
import { getExportSettingsXml, getSequenceExportSettingsXml } from './export-settings.js';

const exportSettingsName = "export-acclaim";
const exportSettingUUID = "c2c404c2-e098-47f1-ad3a-22b3c5bd0ca1";

const sequenceExportSettingsName = "seqexport-acclaim";
const sequenceExportSettingUUID = "bfce0ba0-5e4d-4f62-9302-f13621f2c80a";

const importSettingsName = "import-acclaim";
const importSettingUUID = "2334e325-efb8-43fa-82a1-2f8dce01ab95";

var settingsCreated = false;

export var createSettings = async function(mcapiclient) {
    if (settingsCreated) {
        return;
    }

    const mutex = new Mutex();

    try {
        await mutex.runExclusive(async () => {
            if (!settingsCreated) {
                displayTextDebug("setting guard now true");
                settingsCreated = true;
            } else {
                return;
            }
        });

        displayTextDebug("Creating import settings...");
        const importSuccess = await loadSetting(mcapiclient, importSettingUUID, importSettingsName, getImportSettingsXml());
        
        if (!importSuccess) {
            displayTextError("Error loading import settings: " + importSettingsName);
        } else {
            displayTextDebug("Import settings loaded successfully: " + importSettingsName);
        }
        
        displayTextDebug("Creating base export settings...");
        const exportSuccess = await loadSetting(mcapiclient, exportSettingUUID, exportSettingsName, getExportSettingsXml());
        
        if (!exportSuccess) {
            displayTextError("Error loading export settings: " + exportSettingsName);
        } else {
            displayTextDebug("Export settings loaded successfully: " + exportSettingsName);
        }
        
        displayTextDebug("Creating sequence export settings...");
        const sequenceExportSuccess = await loadSetting(mcapiclient, sequenceExportSettingUUID, sequenceExportSettingsName, getSequenceExportSettingsXml());
        
        if (!sequenceExportSuccess) {
            displayTextError("Error loading sequence export settings: " + sequenceExportSettingsName);
        } else {
            displayTextDebug("Sequence export settings loaded successfully: " + sequenceExportSettingsName);
        }
        
        return { importSuccess, exportSuccess, sequenceExportSuccess };
    } catch (error) {
        displayTextError("Exception occurred while creating settings: " + error.message);
        throw error;
    }
}

export var getImportSettingsName = function() {
    return importSettingsName;
}

export var getExportSettingsName = function() {
    return exportSettingsName;
}

export var getSequenceExportSettingsName = function() {
    return sequenceExportSettingsName;
}

var loadSetting = function(mcapiclient, settingUUID, settingsName, settingData) {
    return new Promise((resolve) => {

        settingData = settingData.replace("replace-name", settingsName); // the xml has a generic name, so we replace it with the actual name to avoid duplication
        let request = new LoadSettingRequest();
        
        let loadSettingRequestBody = new LoadSettingRequestBody;
      
        displayTextDebug("Loading setting: " + settingsName + " with uniqueId: " + settingUUID);

        loadSettingRequestBody.setXmlSetting(settingData);
        loadSettingRequestBody.setUniqueId(settingUUID);
        request.setBody(loadSettingRequestBody);

        mcapiclient.loadSetting(request, getMetadata(), (err, response) => {
            if (err) {
                if (err.code == 2){
                    displayTextDebug("Setting already exists: " + settingsName);
                    resolve(true);
                } else {
                    const errMessage = `Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}", settingsName = ${settingsName}`;
                    displayTextError(errMessage);
                    resolve(false);
                }
            } else {
                displayTextDebug("Setting loaded successfully: " + settingsName);
                resolve(true);
            }
        });
    });
}