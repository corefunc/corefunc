import { jsonParseSafe } from "../parse/safe";
import { jsonStringifySafe } from "../stringify/safe";

export type JsonPrimitiveType = boolean | null | number | string;

export interface JsonArrayType extends Array<JsonType> {
  [key: number]: JsonType;
}

export interface JsonObjectType extends Record<string, JsonType> {
  [key: string]: JsonType;
}

export type JsonType = JsonPrimitiveType | JsonArrayType | JsonObjectType;

/**
 * @category JSON Basic
 * @name jsonJsonify
 * @description Attempts to convert any value to JSON allowed value.
 * @summary ```import { jsonJsonify } from "@corefunc/corefunc/json/basic/jsonify";```
 * @param {*} [value] Any value.
 * @param {*=} [defaultResult=undefined] Result in case of error.
 * @param {Boolean=} [unsafe=true] Use unsafe parsing.
 * @param {Boolean=} [fix=true] Fix incorrect JSON string.
 * @returns {JsonType} Plain value or plain object.
 * @since 0.0.87
 * @example ```jsonJsonify({ 1: "one" }) ➜ {"1":"one"}```
 */
export function jsonJsonify(value: any, defaultResult?: any, unsafe: boolean = true, fix: boolean = true): JsonType {
  return jsonParseSafe(jsonStringifySafe(value), defaultResult, unsafe, fix);
}
