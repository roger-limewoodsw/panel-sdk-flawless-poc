import { LoadSettingRequest, LoadSettingRequestBody } from '../grpc-web/MCAPI_Types_pb.js';

import { getMetadata } from './index.js';
import { displayText, displayTextDebug, displayTextError, displayTextFine, displayTextInfo, displayTextWarn} from './index.js';
import { Mutex } from 'async-mutex';

import { getImportSettingsXml } from './import-settings.js';
import { getWaveAudioExportSettingsXml, getSequenceWaveAudioExportSettingsXml } from './export-settings.js';
import { getVideoExportSettingsXml } from './video-settings.js';

const exportWaveAudioSettingsName = "my-panel-exp-audio";
const exportWaveAudioSettingUUID = "2321d81f-d87a-4885-8e31-cd12306c34e3";

const exportSequenceWaveAudioSettingsName = "my-panel-exp-seqaudio";
const exportSequenceWaveAudioSettingUUID = "ad893121-3bf8-4d15-a1dc-39a6cc47c78d";

const exportVideoSettingsName = "my-panel-exp-video-1";
const exportVideoSettingUUID = "271cf7bb-0494-4b2b-bd33-7cde528b7bda";

const importSettingsName = "my-panel-import-file";
const importSettingUUID = "2782a996-ca33-40e5-a30b-df6ac4337604";

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

        displayTextDebug("Creating video export settings...");
        const exportVideoSuccess = await loadSetting(mcapiclient, exportVideoSettingUUID, exportVideoSettingsName, getVideoExportSettingsXml());
        
        if (!exportVideoSuccess) {
            displayTextError("Error loading video export settings: " + exportVideoSettingsName);
        } else {
            displayTextDebug("Video export settings loaded successfully: " + exportVideoSettingsName);
        }

        displayTextDebug("Creating import settings...");
        const importSuccess = await loadSetting(mcapiclient, importSettingUUID, importSettingsName, getImportSettingsXml());
        
        if (!importSuccess) {
            displayTextError("Error loading import settings: " + importSettingsName);
        } else {
            displayTextDebug("Import settings loaded successfully: " + importSettingsName);
        }
        
        displayTextDebug("Creating base export settings...");
        const exportSuccess = await loadSetting(mcapiclient, exportWaveAudioSettingUUID, exportWaveAudioSettingsName, getWaveAudioExportSettingsXml());
        
        if (!exportSuccess) {
            displayTextError("Error loading export settings: " + exportWaveAudioSettingsName);
        } else {
            displayTextDebug("Export settings loaded successfully: " + exportWaveAudioSettingsName);
        }
        
        displayTextDebug("Creating sequence export settings...");
        const sequenceExportSuccess = await loadSetting(mcapiclient, exportSequenceWaveAudioSettingUUID, exportSequenceWaveAudioSettingsName, getSequenceWaveAudioExportSettingsXml());
        
        if (!sequenceExportSuccess) {
            displayTextError("Error loading sequence export settings: " + exportSequenceWaveAudioSettingsName);
        } else {
            displayTextDebug("Sequence export settings loaded successfully: " + exportSequenceWaveAudioSettingsName);
        }
        
        return { importSuccess, exportSuccess, sequenceExportSuccess, exportVideoSuccess };
    } catch (error) {
        displayTextError("Exception occurred while creating settings: " + error.message);
        throw error;
    }
}

export var getImportSettingsName = function() {
    return importSettingsName;
}

export var getWaveAudioExportSettingsName = function() {
    return exportWaveAudioSettingsName;
}

export var getSequenceWaveAudioExportSettingsName = function() {
    return exportSequenceWaveAudioSettingsName;
}

export var getVideoExportSettingsName = function() {
    return exportVideoSettingsName;
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