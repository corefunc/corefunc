"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringTemplate = void 0;
const string_1 = require("../cast/to/string");
const forEach_1 = require("../collection/forEach");
const replace_1 = require("../regex/basic/replace");
/**
 * Generate template with variables
 * @return {String}
 */
function stringTemplate(string = "", variables = {}, start = "{", end = "}") {
    let strTemplate = string_1.default(string);
    const strStart = string_1.default(start);
    const strEnd = string_1.default(end);
    forEach_1.default(variables, (textToReplace, variableName) => {
        strTemplate = replace_1.regexReplace(strTemplate, strStart + variableName + strEnd, textToReplace);
    });
    return strTemplate;
}
exports.stringTemplate = stringTemplate;
