"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isObjectLike_1 = require("../check/isObjectLike");
/**
 * Whether the object has the specified property
 * @param object
 * @param propertyName
 * @return {Boolean}
 */
function propertyHasOwn(object, propertyName) {
    if (!object) {
        return false;
    }
    if (isObjectLike_1.default(object) === false) {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(object, `${propertyName}`);
}
exports.default = propertyHasOwn;
