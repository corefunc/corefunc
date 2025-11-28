import { castToString } from "../../cast/to/string.js";
import { stringMakeEscaped } from "../../string/make/escaped.js";

export function jsonCleanup(text: string): string {
  return stringMakeEscaped(castToString(text));
}
