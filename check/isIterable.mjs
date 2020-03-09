import isFunction from "../is/function.mjs";
import iteratorSymbol from "../lang/iteratorSymbol.mjs";

export default function checkIsIterable(object) {
  return Boolean(object) && isFunction(object[iteratorSymbol]);
}
