import { isFunction } from "../is/function.js";
import { langIteratorSymbol } from "../lang/iterator-symbol.js";

export function checkIsIterable(object: unknown): boolean {
  if (object === null) {
    return false;
  }
  const maybe = object as Record<PropertyKey, unknown>;
  return isFunction(maybe[langIteratorSymbol]);
}
