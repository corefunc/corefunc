const castToString = require("../cast/to/string.cjs");
const collectionForEach = require("../collection/forEach.cjs");
const regexReplace = require("../regex/replace.cjs");

/**
 * Generate template with variables
 * @return {String}
 */
module.exports = function stringTemplate(string = "", variables = {}, start = "{", end = "}") {
  let strTemplate = castToString(string);
  const strStart = castToString(start);
  const strEnd = castToString(end);
  collectionForEach(variables, (textToReplace, variableName) => {
    strTemplate = regexReplace(strTemplate, strStart + variableName + strEnd, textToReplace);
  });
  return strTemplate;
};
