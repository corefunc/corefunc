import castToString from "../cast/to/string.mjs";
import { collectionForEach } from "../collection/forEach.mjs";
import { regexReplace } from "../regex/basic/replace.mjs";

/**
 * Generate template with variables
 * @return {String}
 */
export function stringTemplate(string = "", variables = {}, start = "{", end = "}") {
  let strTemplate = castToString(string);
  const strStart = castToString(start);
  const strEnd = castToString(end);
  collectionForEach(variables, (textToReplace, variableName) => {
    strTemplate = regexReplace(strTemplate, strStart + variableName + strEnd, textToReplace);
  });
  return strTemplate;
}
