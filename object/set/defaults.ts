import { checkIsObjectLike } from "../../check/is-object-like";

/**
 * @category Object Set
 * @name objectSetDefaults
 * @param {Object} destination
 * @param {Object} source
 * @param {{ arrayMergeToUnique?: boolean; nullAsUndefined?: boolean; objectDeepMerge?: boolean }} [options]
 * @returns {Object}
 * @example objectSetDefaults({}, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: undefined }, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: null }, { val: true }) // { val: null }
 * @example objectSetDefaults({ val: "text" }, { val: true }) // { val: "text" }
 */
export function objectSetDefaults<Dest extends object, Src extends object>(
  destination: Dest,
  source: Src,
  options: {
    arrayMergeToUnique?: boolean;
    nullAsUndefined?: boolean;
    objectDeepMerge?: boolean;
  } = {
    arrayMergeToUnique: false,
    nullAsUndefined: false,
    objectDeepMerge: false,
  },
): Dest & Src {
  if (!checkIsObjectLike(destination)) {
    return objectSetDefaults({} as Dest, source);
  }
  if (!checkIsObjectLike(source)) {
    return objectSetDefaults(destination, {} as Src);
  }
  const obj = Object.assign(Object.create(Object.getPrototypeOf(destination)));
  Array.from(new Set([...Object.keys(destination), ...Object.keys(source)]))
    .filter((key) => !["__proto__", "constructor"].includes(key))
    .sort((alpha, beta) => alpha.localeCompare(beta))
    .forEach(function (key) {
      const valDest = destination[key];
      const valSrc = source[key];
      obj[key] = undefined;
      if (valDest === undefined && valSrc === undefined) {
        return;
      }
      if (options.nullAsUndefined && valDest === null && valSrc === null) {
        return;
      }
      if (checkIsObjectLike(valSrc) && checkIsObjectLike(valDest)) {
        if (options.objectDeepMerge) {
          obj[key] = objectSetDefaults(valDest, valSrc, options);
        } else {
          obj[key] = valSrc;
        }
      } else if (Array.isArray(valDest) && Array.isArray(valSrc)) {
        if (options.arrayMergeToUnique) {
          obj[key] = Array.from(new Set([...valDest, ...valSrc])).sort();
        } else {
          obj[key] = valSrc;
        }
      } else {
        if (options.nullAsUndefined) {
          if (valSrc === null) {
            obj[key] = valDest;
          } else {
            obj[key] = valSrc;
          }
        } else {
          if (valSrc === undefined) {
            obj[key] = valDest;
          } else {
            obj[key] = valSrc;
          }
        }
      }
    });
  return obj;
}
