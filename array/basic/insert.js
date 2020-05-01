"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayBasicInsert(array, index, item) {
    return [...array.slice(0, index), item, ...array.slice(index)];
}
exports.default = arrayBasicInsert;
