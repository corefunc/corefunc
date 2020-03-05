import isObject from "lodash-es/isObject";
import fnIsIterable from "./isIterable";

export default function checkIsTraversable(value): boolean {
  return Boolean(Array.isArray(value) || isObject(value) || fnIsIterable(value));
}
