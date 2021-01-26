"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcCallVoid = void 0;
function funcCallVoid(callback, args) {
    if (!callback) {
        return;
    }
    switch (Object.prototype.toString.call(callback)) {
        case "[object AsyncFunction]":
            callback(...args)
                .then(() => { })
                .catch(() => { });
            break;
        case "[object Function]":
            try {
                callback(...args);
            }
            catch (_error) {
                //
            }
            break;
    }
}
exports.funcCallVoid = funcCallVoid;
