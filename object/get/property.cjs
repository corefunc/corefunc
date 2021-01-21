"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectGetProperty = void 0;
function objectGetProperty(object, key, defaultvalue) {
  if (key in object) {
    return object[key];
  }
  return defaultvalue;
}
exports.objectGetProperty = objectGetProperty;