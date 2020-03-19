import castToString from "../cast/to/string.mjs";
import stringEscapeEscaped from "../string/escapeEscaped.mjs";

export default function jsonCleanup(text) {
  return stringEscapeEscaped(castToString(text));
}
