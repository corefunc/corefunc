import collectionValues from "../../collection/values";

/**
 * Creates a new Array instance from an array-like or iterable object
 * This has different behaviour from `Array.from`.
 * @param {*} value
 * @return {Array}
 */
export default function castToArray(value: any): any[] {
  return collectionValues(value);
}
