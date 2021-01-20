import castToString from "../cast/to/string";
import collectionForEach from "../collection/forEach";
import { regexReplace } from "../regex/basic/replace";

/**
 * Generate template with variables
 * @return {String}
 */
export function stringTemplate(
  string: string = "",
  variables: object = {},
  start: string = "{",
  end: string = "}",
): string {
  let strTemplate = castToString(string);
  const strStart = castToString(start);
  const strEnd = castToString(end);
  collectionForEach(variables, (textToReplace, variableName) => {
    strTemplate = regexReplace(strTemplate, strStart + variableName + strEnd, textToReplace);
  });
  return strTemplate;
}
