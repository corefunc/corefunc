import { jsonParseSafe } from "./safe";

/**
 * @category JSON Parse
 * @name jsonParseAttempt
 * @description Trying parse value and if fails return original value.
 * @summary ```import { jsonParseAttempt } from "@corefunc/corefunc/json/parse/attempt";```
 * @param {*} [value] Value to parse.
 * @returns {*} Parsed value or original value.
 * @since 0.2.2
 */
export function jsonParseAttempt<T>(value: T): T {
  return jsonParseSafe(value as unknown as string, value, false, false);
}
