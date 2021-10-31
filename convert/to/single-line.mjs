import { castToString } from "../../cast/to/string.mjs";
import { checkIsObjectLike } from "../../check/is-object-like.mjs";
import { checkIsPrimitive } from "../../check/is-primitive.mjs";
import { convertErrorToString } from "../error/string.mjs";
import { isString } from "../../is/string.mjs";
import { regexIsMultiline } from "../../regex/is/multiline.mjs";

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

function objectToSingleLine(record) {
  if (record instanceof Error) {
    return convertErrorToString(record);
  }
  const keys = Object.keys(record);
  let output = "";
  keys.forEach((key) => {
    output = `${output}${key}: ${convertAnyToSingleLine(record[key])}`;
    if (!output.endsWith(" ")) {
      output = `${output} `;
    }
  });
  return output;
}

function convertAnyToSingleLine(record) {
  if (checkIsPrimitive(record)) {
    return primitiveToSingleLine(record);
  }
  if (Array.isArray(record)) {
    return arrayToSingleLine(record);
  }
  if (checkIsObjectLike(record)) {
    return objectToSingleLine(record);
  }
  return stringToSingleLine(String(record));
}

/**
 * @name convertToSingleLine
 * @category Convert To
 * @description Convert any value to single line string.
 * @summary ```import { convertErrorToString } from "@corefunc/corefunc/convert/to/single-line";```
 * @param {*} record Any plain value
 * @returns {string} Single line string
 * @since 0.3.10
 */
export function convertToSingleLine(record) {
  return convertAnyToSingleLine(record);
}
