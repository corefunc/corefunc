import fnIsArray from "./isArray";
import isObject from "lodash-es/isObject";
import fnIsIterable from "./isIterable";

function isTraversable(value) {
  return Boolean(fnIsArray(value) || isObject(value) || fnIsIterable(value));
}

export default isTraversable;
