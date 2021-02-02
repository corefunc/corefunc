"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySortStrings = void 0;
function arraySortStrings(array) {
    return array.sort((alpha, beta) => alpha.localeCompare(beta));
}
exports.arraySortStrings = arraySortStrings;
