/**
 * @name convertToFlag
 * @description
 * Turns: undefined, null, 0, "0", "", "false", "FALSE", "n", "no", "of" to boolean false.
 * Turns: 1, 1n, "1", "true", "TRUE", "on", "y", "yes" to boolean true.
 * @summary ```import { convertToFlag } from "@corefunc/corefunc/convert/to/flag";```
 * @param {*} value
 * @param {*=false} onEmpty
 * @param {*=onEmpty} onUnParsable
 * @returns {boolean}
 */
export function convertToFlag(value: any, onEmpty: boolean = false, onUnParsable: boolean = onEmpty): boolean {
  if (value === undefined || value === null) {
    return onEmpty;
  }
  if (typeof value === "boolean") {
    return value;
  }
  const affirmative = value.toString().toLocaleLowerCase().trim();
  if (affirmative.length === 0) {
    return onEmpty;
  }
  switch (affirmative) {
    case "1":
    case "on":
    case "true":
    case "y":
    case "yes":
      return true;
    case "0":
    case "false":
    case "n":
    case "no":
    case "off":
      return false;
    default:
      return onUnParsable;
  }
}
