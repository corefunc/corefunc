"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castMapToArray = void 0;
function castMapToArray(map) {
    return Array.from(map).map(([, val]) => val);
}
exports.castMapToArray = castMapToArray;
