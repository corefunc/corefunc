import * as v8 from "v8";

/**
 * @category V8
 * @name v8Clone
 * @description Deep clone object. Note: don't use on objects containing Functions.
 * @param {Object} objectToClone Object to be deep cloned
 * @param {Boolean} [returnOriginalOnError=true]
 * @returns {Object}
 * @throws {Error}
 * @since 0.1.47
 */
export function v8Clone<T extends object>(objectToClone: T, returnOriginalOnError = true): T {
  if (returnOriginalOnError) {
    try {
      return v8.deserialize(v8.serialize(objectToClone));
    } catch (_error) {
      return objectToClone;
    }
  } else {
    return v8.deserialize(v8.serialize(objectToClone));
  }
}
