import { castToString } from "../../cast/to/string.mjs";
import { stringMakeEscaped } from "../../string/make/escaped.mjs";

export function jsonCleanup(text) {
  return stringMakeEscaped(castToString(text));
}
