"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectGetClass = void 0;
/**
 * @name objectGetClass
 * @description Retrieve instance class name
 * @param {*} value
 * @returns {string}
 * @since 1.0.2
 */
function objectGetClass(value) {
    if (value && typeof value === "object" && "constructor" in value && "name" in value.constructor) {
        return value.constructor.name;
    }
    return "";
}
exports.objectGetClass = objectGetClass;
