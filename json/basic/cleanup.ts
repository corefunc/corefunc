import { castToString } from "../../cast/to/string";
import { stringEscapeEscaped } from "../../string/escapeEscaped";

export function jsonCleanup(text: string): string {
  return stringEscapeEscaped(castToString(text));
}
