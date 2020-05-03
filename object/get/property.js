"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectGetProperty(object, key, defaultvalue) {
  if (key in object) {
    return object[key];
  }
  return defaultvalue;
}
exports.default = objectGetProperty;
