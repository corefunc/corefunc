"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneOfOrElse = void 0;
/**
 * @name oneOfOrElse
 * @description Get on from list or other value
 * @param {Array} list
 * @param {*} value
 * @param {*=} defaultValue
 * @since 0.0.86
 */
function oneOfOrElse(list, value, defaultValue = undefined) {
  return new Set(list).has(value) ? value : defaultValue;
}
exports.oneOfOrElse = oneOfOrElse;
