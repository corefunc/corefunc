"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arraySortStrings(array) {
    return array.sort((alpha, beta) => alpha.localeCompare(beta));
}
exports.default = arraySortStrings;
