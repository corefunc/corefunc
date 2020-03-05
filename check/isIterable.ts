import isFunction from "../is/isFunction";
import iteratorSymbol from "../lang/iteratorSymbol";

export default function checkIsIterable(object) {
  return Boolean(object) && isFunction(object[iteratorSymbol]);
}
