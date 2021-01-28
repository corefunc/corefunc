import { castToString } from "../../cast/to/string";
import { stringMakeEscaped } from "../../string/make/escaped";

export function jsonCleanup(text: string): string {
  return stringMakeEscaped(castToString(text));
}
