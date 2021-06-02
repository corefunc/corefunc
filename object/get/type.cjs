"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectGetType = void 0;
/**
 * @category Object Get
 * @name objectGetType
 * @description Get type of object
 * @param {*=} [objectLike]
 * @returns {string}
 */
function objectGetType(objectLike) {
  const type = String((Object.prototype.toString.call(objectLike).toLowerCase().split("[object ").pop() || "").split("]").shift());
  if (["global", "window"].includes(type)) {
    return "object";
  }
  if (type.includes("error")) {
    return "error";
  }
  return type;
}
exports.objectGetType = objectGetType;
