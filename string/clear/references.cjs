"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringClearReferences = void 0;
function stringClearReferences(text) {
  if (text.length < 12) {
    return text;
  }
  return (" " + text).slice(1);
}
exports.stringClearReferences = stringClearReferences;
