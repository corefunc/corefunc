"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGlobal = void 0;
function isGlobal(value) {
    return ["[object global]", "[object Window]"].includes(Object.prototype.toString.call(value));
}
exports.isGlobal = isGlobal;
