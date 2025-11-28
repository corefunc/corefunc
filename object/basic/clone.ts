import { checkIsPrimitive } from "../../check/is-primitive.js";

export type TransferableObjectType =
  | ArrayBuffer
  | ImageBitmap
  | MessagePort
  | OffscreenCanvas
  | ReadableStream
  | WritableStream;

/**
 * @category Object Basic
 * @name objectBasicClone
 * @description Creates a deep clone of a given value using the structured clone algorithm.
 * Do not throw errors if structured cloning is not possible.
 * In case of failure returns the same variable.
 * You can check it with ```Object.is(originalVariable, clonedVariable)```.
 * Requires: NodeJS v17.0.0, Firefox v94.
 * @summary ```import { objectBasicClone } from "@corefunc/corefunc/object/basic/clone";```
 * @template {ValueType}
 * @param {unknown} value The object to be cloned. This can be any structured-clonable type.
 * @param {StructuredSerializeOptions['transfer']=} [transfer] An list of transferable objects in value that will be moved rather than cloned to the returned object.
 * @returns {ValueType} The returned value is a deep copy of the original value.
 * @since 0.3.20
 */
export function objectBasicClone<ValueType>(
  value: ValueType,
  transfer?: StructuredSerializeOptions["transfer"],
): ValueType {
  if (checkIsPrimitive(value)) {
    return value;
  }
  if ("structuredClone" in globalThis) {
    try {
      let cloned: ValueType;
      if (transfer) {
        cloned = globalThis.structuredClone(value, { transfer });
      } else {
        cloned = globalThis.structuredClone(value);
      }
      return cloned;
    } catch {
      // intentionally ignore errors
    }
  }
  return value;
}
