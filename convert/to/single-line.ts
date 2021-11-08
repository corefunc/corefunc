import { castToString } from "../../cast/to/string";
import { checkIsObjectLike } from "../../check/is-object-like";
import { checkIsPrimitive } from "../../check/is-primitive";
import { convertErrorToString } from "../error/string";
import { isString } from "../../is/string";
import { regexIsMultiline } from "../../regex/is/multiline";
import { textCaseCamel } from "../../text/case/camel";
import { textCaseCapitalize } from "../../text/case/capitalize";

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

function primitiveToSingleLine(record: any): string {
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

function arrayToSingleLine(record: any[]): string {
  return record.map((value) => convertAnyToSingleLine(value)).join(" ");
}

function objectToSingleLine(record: Record<string, any>, prettify = false): string {
  if (record instanceof Error) {
    return convertErrorToString(record);
  }
  const keys = Object.keys(record);
  let output = "";
  keys.forEach((key) => {
    if (prettify) {
      key = textCaseCapitalize(textCaseCamel(key, true));
    }
    output = `${output}${key}: ${convertAnyToSingleLine(record[key])}`;
    if (!output.endsWith(" ")) {
      output = `${output} `;
    }
  });
  return output;
}

function convertAnyToSingleLine(record: any, prettify = false): string {
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
export function convertToSingleLine(record: any, prettify = false): string {
  return convertAnyToSingleLine(record, prettify);
}
