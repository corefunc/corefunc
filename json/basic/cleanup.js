import { castToString } from "../../cast/to/string.js";
import { stringMakeEscaped } from "../../string/make/escaped.js";
export function jsonCleanup(text) {
    return stringMakeEscaped(castToString(text));
}
