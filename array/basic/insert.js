"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicInsert = void 0;
function arrayBasicInsert(array, index, item) {
    return [...array.slice(0, index), item, ...array.slice(index)];
}
exports.arrayBasicInsert = arrayBasicInsert;
