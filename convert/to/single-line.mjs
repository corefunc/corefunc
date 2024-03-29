import { castToString } from "../../cast/to/string.mjs";
import { checkIsObjectLike } from "../../check/is-object-like.mjs";
import { checkIsPrimitive } from "../../check/is-primitive.mjs";
import { convertErrorToString } from "../error/string.mjs";
import { isString } from "../../is/string.mjs";
import { regexIsMultiline } from "../../regex/is/multiline.mjs";
import { textCaseCamel } from "../../text/case/camel.mjs";
import { textCaseCapitalize } from "../../text/case/capitalize.mjs";

function stringToSingleLine(record) {
  if (regexIsMultiline(record)) {
    record = record.replace(/\r?\n/g, " ");
  }
  record = record.trim();
  if (!record.endsWith(".")) {
    record = `${record}.`;
  }
  return record;
}

function primitiveToSingleLine(record) {
  if (isString(record)) {
    return stringToSingleLine(record);
  }
  if (record === undefined) {
    return stringToSingleLine("undefined");
  }
  if (record === null) {
    return stringToSingleLine("null");
  }
  return stringToSingleLine(castToString(record));
}

function arrayToSingleLine(record) {
  return record.map((value) => convertAnyToSingleLine(value)).join(" ");
}

function objectToSingleLine(record, prettify = false) {
  if (record instanceof Error) {
    return convertErrorToString(record);
  }
  const keys = Object.keys(record).sort((alpha, beta) => alpha.localeCompare(beta));
  let output = "";
  keys.forEach((key) => {
    let prettyKey = key;
    if (prettify) {
      prettyKey = textCaseCapitalize(textCaseCamel(prettyKey, true)).replace(/([a-z])([A-Z])/g, "$1 $2");
    }
    output = `${output}${prettyKey}: ${convertAnyToSingleLine(record[key], prettify)}`;
    if (!output.endsWith(" ")) {
      output = `${output} `;
    }
  });
  return output;
}

function convertAnyToSingleLine(record, prettify = false) {
  if (checkIsPrimitive(record)) {
    return primitiveToSingleLine(record);
  }
  if (Array.isArray(record)) {
    return arrayToSingleLine(record);
  }
  if (checkIsObjectLike(record)) {
    return objectToSingleLine(record, prettify);
  }
  return stringToSingleLine(String(record));
}

/**
 * @name convertToSingleLine
 * @category Convert To
 * @description Convert any value to single line string.
 * @summary ```import { convertToSingleLine } from "@corefunc/corefunc/convert/to/single-line";```
 * @param {*} record Any plain value
 * @param {boolean=} [prettify=false]
 * @returns {string} Single line string
 * @since 0.3.10
 */
export function convertToSingleLine(record, prettify = false) {
  if (prettify) {
    return convertAnyToSingleLine(record, true).trim();
  }
  return convertAnyToSingleLine(record, false).trim();
}
