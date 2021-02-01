"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varGetType = void 0;
function varGetType(value) {
    return Object.prototype.toString.call(value).slice(1, -1).split(/[\s]+/u);
}
exports.varGetType = varGetType;
