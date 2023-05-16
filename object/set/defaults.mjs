import { checkIsObjectLike } from "../../check/is-object-like.mjs";

/**
 * @category Object Set
 * @name objectSetDefaults
 * @param {Object} destination
 * @param {Object} source
 * @param {boolean=} [nullIsUndefined=false]
 * @returns {Object}
 * @example objectSetDefaults({}, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: undefined }, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: null }, { val: true }) // { val: null }
 * @example objectSetDefaults({ val: "text" }, { val: true }) // { val: "text" }
 */
export function objectSetDefaults(destination, source, nullIsUndefined = false) {
  if (!checkIsObjectLike(destination)) {
    return objectSetDefaults({}, source);
  }
  if (!checkIsObjectLike(source)) {
    return objectSetDefaults(destination, {});
  }
  const obj = Object.assign(Object.create(Object.getPrototypeOf(destination)), source);
  Object.keys(destination).forEach(function (key) {
    if (key === "__proto__" || key === "constructor") {
      return;
    }
    const val = destination[key];
    if (val === undefined) {
      return;
    }
    if (nullIsUndefined && val === null) {
      return;
    }
    if (checkIsObjectLike(val) && checkIsObjectLike(obj[key])) {
      obj[key] = objectSetDefaults(val, obj[key]);
    } else {
      obj[key] = val;
    }
  });
  return obj;
}
