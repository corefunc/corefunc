import { isFunction } from "../is/function";
import iteratorSymbol from "../lang/iteratorSymbol";

export function checkIsIterable(object: object): boolean {
  return Boolean(object) && isFunction(object[iteratorSymbol]);
}
