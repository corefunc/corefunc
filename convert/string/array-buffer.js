"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToArrayBuffer = void 0;
function convertStringToArrayBuffer(text) {
    const buf = new ArrayBuffer(text.length * 2);
    const bufView = new Uint16Array(buf);
    for (let index = 0, strLen = text.length; index < strLen; index++) {
        bufView[index] = text.charCodeAt(index);
    }
    return buf;
}
exports.convertStringToArrayBuffer = convertStringToArrayBuffer;
