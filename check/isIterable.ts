import { isFunction } from "../is/function";
import { langIteratorSymbol } from "../lang/iteratorSymbol";

export function checkIsIterable(object: object): boolean {
  return Boolean(object) && isFunction(object[langIteratorSymbol]);
}
