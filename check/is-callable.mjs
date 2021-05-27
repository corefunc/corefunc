import { isFunction } from "../is/function.mjs";

export function checkIsCallable(value) {
  if (!value) {
    return false;
  }
  if (isFunction(value)) {
    return true;
  }
  if ("toFunction" in value && isFunction(value.toFunction) && isFunction(value.toFunction())) {
    return true;
  }
  //
  return false;
}
