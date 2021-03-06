"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsFalsy = void 0;
function checkIsFalsy(value) {
    if (value === false || value === 0) {
        return true;
    }
    return typeof value === "string" && value.search(/^(?:no|n|false|f|off|0)$/i) !== -1;
}
exports.checkIsFalsy = checkIsFalsy;
