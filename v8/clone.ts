import * as v8 from "v8";

/**
 * @name v8Clone
 * @param {*} obj
 * @returns {*}
 */
export function v8Clone<T>(obj: any): T {
  return v8.deserialize(v8.serialize(obj));
}
