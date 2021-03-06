"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.varGetRawType = void 0;
const _toString = Object.prototype.toString;
/**
 * @name varGetRawType
 * @description Get the raw type string of a value, e.g., [object Object].
 * @param {*} value
 * @returns {string}
 */
function varGetRawType(value) {
  return _toString.call(value).slice(8, -1);
}
exports.varGetRawType = varGetRawType;
