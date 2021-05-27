"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSetDefaults = void 0;
const is_object_like_1 = require("../../check/is-object-like");
/**
 * @category Object Set
 * @name objectSetDefaults
 * @param {Object} destination
 * @param {Object} source
 * @returns {Object}
 * @example objectSetDefaults({}, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: undefined }, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: null }, { val: true }) // { val: null }
 * @example objectSetDefaults({ val: "text" }, { val: true }) // { val: "text" }
 */
function objectSetDefaults(destination, source) {
    if (!is_object_like_1.checkIsObjectLike(destination)) {
        return objectSetDefaults({}, source);
    }
    if (!is_object_like_1.checkIsObjectLike(source)) {
        return objectSetDefaults(destination, {});
    }
    const obj = Object.assign(Object.create(Object.getPrototypeOf(destination)), source);
    Object.keys(destination).forEach(function (key) {
        if (key === "__proto__" || key === "constructor") {
            return;
        }
        const val = destination[key];
        if (val === undefined) {
            return;
        }
        if (is_object_like_1.checkIsObjectLike(val) && is_object_like_1.checkIsObjectLike(obj[key])) {
            obj[key] = objectSetDefaults(val, obj[key]);
        }
        else {
            obj[key] = val;
        }
    });
    return obj;
}
exports.objectSetDefaults = objectSetDefaults;
