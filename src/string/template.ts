import fnEach from "lodash-es/each";
import fnReplace from "lodash-es/replace";
import fnToString from "lodash-es/toString";

/**
 * Generate template with variables
 * @return {String}
 */
function template(string = "", variables = {}, start = "{", end = "}") {
  let strTemplate = fnToString(string);
  const strStart = fnToString(start);
  const strEnd = fnToString(end);
  fnEach(variables, (textToReplace, variableName) => {
    strTemplate = fnReplace(strTemplate, strStart + variableName + strEnd, textToReplace);
  });
  return strTemplate;
}

export default template;
