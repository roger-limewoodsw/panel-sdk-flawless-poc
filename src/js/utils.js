import { displayTextDebug } from "./index.js";

const ExportType = Object.freeze({
  VIDEO: 'Video',
  AUDIO: 'Audio'
});


const taskPathMap = new Map();

function registerTaskPath(taskId, path) {
    displayTextDebug("registerTaskPath: taskId: " + taskId + ", path: " + path);
    taskPathMap.set(taskId, path);
}

function getPathByTaskId(taskId) {
    let result = taskPathMap.get(taskId) ?? null;
    displayTextDebug("getPathByTaskId: taskId: " + taskId + ", path: " + result);
    return result;
}

export { registerTaskPath, getPathByTaskId };
export { ExportType}