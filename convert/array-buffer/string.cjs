"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArrayBufferToString = void 0;
function convertArrayBufferToString(buffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buffer));
}
exports.convertArrayBufferToString = convertArrayBufferToString;
