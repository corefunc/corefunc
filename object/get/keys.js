"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name objectGetKeys
 * @param {Object} object
 * @returns {Array.<string>}
 */
function objectGetKeys(object) {
  return Object.keys(object).sort((alpha, beta) => alpha.localeCompare(beta));
}
exports.default = objectGetKeys;
