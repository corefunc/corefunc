import { checkIsObjectLike } from "../../check/isObjectLike";

/**
 * @name objectSetDefaults
 * @param {Object} destination
 * @param {Object} source
 * @returns {Object}
 * @example objectSetDefaults({}, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: undefined }, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: null }, { val: true }) // { val: null }
 * @example objectSetDefaults({ val: "text" }, { val: true }) // { val: "text" }
 */
export function objectSetDefaults<Dest extends object, Src extends object>(
  destination: Dest,
  source: Src,
): Dest & Src {
  if (!checkIsObjectLike(destination)) {
    return objectSetDefaults({} as Dest, source);
  }
  if (!checkIsObjectLike(source)) {
    return objectSetDefaults(destination, {} as Src);
  }
  const obj = Object.assign(Object.create(Object.getPrototypeOf(destination)) as Dest, source);
  Object.keys(destination).forEach(function (key) {
    if (key === "__proto__" || key === "constructor") {
      return;
    }
    const val = destination[key];
    if (val === undefined) {
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
