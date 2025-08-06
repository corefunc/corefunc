import { isFunction } from "../is/function.js";
import { langIteratorSymbol } from "../lang/iterator-symbol.js";

export function checkIsIterable(object) {
  return Boolean(object) && isFunction(object[langIteratorSymbol]);
}
