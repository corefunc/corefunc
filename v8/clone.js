"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v8Clone = void 0;
const v8 = require("v8");
/**
 * @name v8Clone
 * @param {*} obj
 * @returns {*}
 */
function v8Clone(obj) {
    return v8.deserialize(v8.serialize(obj));
}
exports.v8Clone = v8Clone;
