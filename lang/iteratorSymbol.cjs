"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langIteratorSymbol = void 0;
/**
 * Expose iteratorSymbol
 */
exports.langIteratorSymbol = (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
