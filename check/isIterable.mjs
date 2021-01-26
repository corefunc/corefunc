import { isFunction } from "../is/function.mjs";
import { langIteratorSymbol } from "../lang/iteratorSymbol.mjs";

export function checkIsIterable(object) {
  return Boolean(object) && isFunction(object[langIteratorSymbol]);
}
