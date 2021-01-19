"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function castMapToArray(map) {
    return Array.from(map).map(([, val]) => val);
}
exports.default = castMapToArray;
