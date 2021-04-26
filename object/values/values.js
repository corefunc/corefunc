"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectValues = void 0;
/**
 * @category Object Values
 * @name objectValues
 * @description Gets object values.
 * @summary ```import { objectValues } from '@corefunc/corefunc/object/values/values';```
 * @param {Object} object Object to search in
 * @returns {Array} Array with values.
 */
function objectValues(object) {
    if (!object) {
        return [];
    }
    return Object.values(object);
}
exports.objectValues = objectValues;
