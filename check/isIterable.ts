import isFunction from "../is/function";
import iteratorSymbol from "../lang/iteratorSymbol";

export default function checkIsIterable(object: object): boolean {
  return Boolean(object) && isFunction(object[iteratorSymbol]);
}
