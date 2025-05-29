import { GetViewerMobsRequest, GetViewerMobsRequestBody } from '../grpc-web/MCAPI_Types_pb.js';

import { getMetadata } from './index.js';
import { displayText, displayTextDebug, displayTextError, displayTextFine, displayTextInfo, displayTextWarn} from './index.js';
export var nullMobId = "00000000-0000-0000-0000-000000000000";

export function getActiveSequenceId(mcapiclient) {
    displayTextDebug("getActiveSequenceId");

    return new Promise((resolve, reject) => {
        let mobId = nullMobId;
        let request = new GetViewerMobsRequest();

        let getViewerMobsRequestBody = new GetViewerMobsRequestBody;
        request.setBody(getViewerMobsRequestBody);
        displayTextDebug("submitting getViewerMobs request");
        mcapiclient.getViewerMobs(request, getMetadata(), (err, response) => {
            if (err) {
                const errMessage = `Unexpected error: code = ${err.code}` +
                    `, message = "${err.message}"`;
                displayTextError(errMessage);
                mcapi.reportError(err.code, err.message);
                reject(err);
            } else {
                
                const responseBody = response.getBody();
                if (!responseBody) {
                    displayTextError("getViewerMobs response body is undefined");
                    reject(new Error("getViewerMobs response body is undefined"));
                    return;
                }
                //displayTextDebug("getViewerMobs response received: " + JSON.stringify(responseBody));
                let mobInfoList = responseBody.getMobsList();
                let found = false;
                for (let mobInfo of mobInfoList) {
                    let dispString = "";
                    mobId = mobInfo.getMobId();
                    let frame = mobInfo.getCurrentFrame();
                    let timecode = mobInfo.getCurrentTimecode();

                    switch (mobInfo.getViewType()) {
                        case proto.mcapi.ViewerType.SOURCE:
                            dispString = "S";
                            break;

                        case proto.mcapi.ViewerType.RECORD:
                            dispString = "R";
                            found = true;
                            break;

                        case proto.mcapi.ViewerType.POPUP:
                            dispString = "P";
                            break;

                        case proto.mcapi.ViewerType.CENTER:
                            dispString = "C";
                            break;

                        default:
                            break;
                    }
                    if (found) {
                        displayTextDebug("Active sequence found, resolving: " + mobId);
                        resolve(mobId);
                        return;
                    } 

                    //dispString += timecode + " " + frame + " " + mobId;
                    
                }
                displayTextError("Active sequence not found, rejecting");
                reject(new Error("Active sequence not found"));
            }
        });
    });

}