import { castToString } from "../../cast/to/string.js";
import { checkIsObjectLike } from "../../check/is-object-like.js";
import { checkIsPrimitive } from "../../check/is-primitive.js";
import { convertErrorToString } from "../error/string.js";
import { isString } from "../../is/string.js";
import { regexIsMultiline } from "../../regex/is/multiline.js";
import { textCaseCamel } from "../../text/case/camel.js";
import { textCaseCapitalize } from "../../text/case/capitalize.js";

function stringToSingleLine(record: string): string {
  if (regexIsMultiline(record)) {
    record = record.replace(/\r?\n/g, " ");
  }
  record = record.trim();
  if (!record.endsWith(".")) {
    record = `${record}.`;
  }
  return record;
}

function primitiveToSingleLine(record: unknown): string {
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

function arrayToSingleLine(record: unknown[]): string {
  return record.map((value) => convertAnyToSingleLine(value)).join(" ");
}

function objectToSingleLine(record: Record<string, unknown>, prettify = false): string {
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

function convertAnyToSingleLine(record: unknown, prettify = false): string {
  if (checkIsPrimitive(record)) {
    return primitiveToSingleLine(record);
  }
  if (Array.isArray(record)) {
    return arrayToSingleLine(record);
  }
  if (checkIsObjectLike(record)) {
    return objectToSingleLine(record as Record<string, unknown>, prettify);
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
export function convertToSingleLine(record: unknown, prettify = false): string {
  if (prettify) {
    return convertAnyToSingleLine(record, true).trim();
  }
  return convertAnyToSingleLine(record, false).trim();
}
