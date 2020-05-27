"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringCamelize(text) {
  return text.replace(/-(\w)/g, (_sub, camel) => (camel ? camel.toUpperCase() : ""));
}
exports.default = stringCamelize;
