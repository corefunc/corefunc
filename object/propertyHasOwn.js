"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyHasOwn = void 0;
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
    if (isObjectLike_1.checkIsObjectLike(object) === false) {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(object, `${propertyName}`);
}
exports.propertyHasOwn = propertyHasOwn;
