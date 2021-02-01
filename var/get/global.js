"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varGetGlobal = void 0;
/**
 * @deprecated
 * @name varGetGlobal
 * @returns {NodeJS.Global|(WorkerGlobalScope & Window)|Window}
 */
// @ts-ignore
function varGetGlobal() {
    if (typeof globalThis !== "undefined") {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        return globalThis;
    }
    if (typeof self !== "undefined") {
        // eslint-disable-next-line no-undef
        return self;
    }
    if (typeof window !== "undefined") {
        // eslint-disable-next-line no-undef
        return window;
    }
    // @ts-ignore
    if (typeof global !== "undefined") {
        // eslint-disable-next-line no-undef
        // @ts-ignore
        return global;
    }
    try {
        return Function("return this")();
    }
    catch (_a) {
        //
    }
    return undefined;
}
exports.varGetGlobal = varGetGlobal;
