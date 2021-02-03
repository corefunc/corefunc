"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPlainObject = void 0;
function convertToPlainObject(object) {
  return JSON.parse(JSON.stringify(object));
}
exports.convertToPlainObject = convertToPlainObject;
