import checkIsIterable from "./isIterable";
import checkIsObjectLike from "./isObjectLike";

export default function checkIsTraversable(value: any): boolean {
  return Boolean(Array.isArray(value) || checkIsObjectLike(value) || checkIsIterable(value));
}
