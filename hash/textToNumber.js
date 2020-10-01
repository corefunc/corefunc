"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashTextToNumber = void 0;
function hashTextToNumber(text) {
    let hash = 5381;
    let index = text.length;
    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index);
    }
    return hash >>> 0;
}
exports.hashTextToNumber = hashTextToNumber;
