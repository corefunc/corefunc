"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePinCode = void 0;
const string_1 = require("./string");
/**
 * @category Generate
 * @description Generate random PIN code string
 * @param {number} [size]
 * @returns {string}
 */
function generatePinCode(size = 4) {
    return string_1.generateString(size, "0123456789");
}
exports.generatePinCode = generatePinCode;
