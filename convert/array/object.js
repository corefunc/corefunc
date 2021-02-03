"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArrayToObject = void 0;
/**
 * Converts Array to Object
 * @param {Array} array
 * @returns {Object}
 */
function convertArrayToObject(array) {
    return array.reduce((accumulator, currentValue, currentIndex) => (Object.assign(Object.assign({}, accumulator), { [currentIndex]: currentValue })));
}
exports.convertArrayToObject = convertArrayToObject;
