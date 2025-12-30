import { isFunction } from "../is/function.js";
import { langIteratorSymbol } from "../lang/iterator-symbol.js";
export function checkIsIterable(object) {
    if (object === null) {
        return false;
    }
    const maybe = object;
    return isFunction(maybe[langIteratorSymbol]);
}
