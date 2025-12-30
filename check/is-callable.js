import { isFunction } from "../is/function.js";
export function checkIsCallable(value) {
    if (value === null || value === undefined) {
        return false;
    }
    if (isFunction(value)) {
        return true;
    }
    const typeOfValue = typeof value;
    if (typeOfValue === "object" || typeOfValue === "function") {
        const maybeToFunction = value.toFunction;
        if (isFunction(maybeToFunction)) {
            try {
                const result = maybeToFunction.call(value);
                if (isFunction(result)) {
                    return true;
                }
            }
            catch {
                // If calling toFunction throws, treat as not callable
            }
        }
    }
    return false;
}
