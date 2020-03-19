import castToString from "../cast/to/string";
import stringEscapeEscaped from "../string/escapeEscaped";

export default function jsonCleanup(text: string): string {
  return stringEscapeEscaped(castToString(text));
}
