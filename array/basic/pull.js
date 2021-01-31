"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicPull = void 0;
function arrayBasicPull(array, value) {
    const indexOf = array.indexOf(value);
    if (indexOf === -1) {
        return;
    }
    array.splice(indexOf, 1);
    arrayBasicPull(array, value);
}
exports.arrayBasicPull = arrayBasicPull;
