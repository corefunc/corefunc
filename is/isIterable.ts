import fnIsFunction from "./isFunction";
import iteratorSymbol from "../lang/iteratorSymbol";

function isIterable(object) {
  return !!object && fnIsFunction(object[iteratorSymbol]);
}

export default isIterable;
