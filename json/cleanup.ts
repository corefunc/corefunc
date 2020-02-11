import fnToString from "lodash-es/toString";
import fnEscapeEscaped from "../string/escapeEscaped";

function cleanup(string) {
  return fnEscapeEscaped(fnToString(string));
}

export default cleanup;
