"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isIterable_1 = require("./isIterable");
const isObjectLike_1 = require("./isObjectLike");
function checkIsTraversable(value) {
    return Boolean(Array.isArray(value) || isObjectLike_1.default(value) || isIterable_1.default(value));
}
exports.default = checkIsTraversable;
