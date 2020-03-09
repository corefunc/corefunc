import checkIsIterable from "./isIterable.mjs";
import checkIsObjectLike from "./isObjectLike.mjs";

export default function checkIsTraversable(value) {
  return Boolean(Array.isArray(value) || checkIsObjectLike(value) || checkIsIterable(value));
}
