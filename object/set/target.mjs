import { objectSetDefaults } from "./defaults.mjs";

/**
 * @category Object Set
 * @name objectSetTarget
 * @description Set source object to target object. Override properties in target object. Do not create new object. Do not override undefined properties.
 * @summary ```import { objectSetTarget } from "@corefunc/corefunc/object/set/target";```
 * @param {Object} destination
 * @param {Object} source
 * @param {boolean=} [nullIsUndefined=true] Null is considered as undefined.
 * @returns {Object}
 * @since 0.3.63
 */
export function objectSetTarget(destination, source, nullIsUndefined = true) {
  Object.assign(destination, objectSetDefaults(destination, source, nullIsUndefined));
  return destination;
}
