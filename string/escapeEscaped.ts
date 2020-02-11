import fnToString from "lodash-es/toString";

function escapeEscaped(string) {
  return fnToString(string)
    .replace(/\\{3}/g, "")
    .replace(/\\{2}r/g, "")
    .replace(/\\{2}n/g, "")
    .replace(/\\{2}rn/g, "")
    .replace(/n\s/g, "")
    .replace(/\n/g, "")
    .replace(/n}/g, "}")
    .replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f")
    .replace();
}

export default escapeEscaped;
