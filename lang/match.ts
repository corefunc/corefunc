import { isString } from "../is/string";

/**
 * @category Language
 * @name match
 * @description Match expression
 * @summary ```import { match } from "@corefunc/corefunc/lang/match";```
 * @param {*} [value]
 * @param {Map|Object|WeakMap} [subjectExpression]
 * @param {*} [defaultValue=undefined]
 * @param {boolean} [convertToString=false]
 * @returns {*}
 * @since 0.3.3
 * @example ```match(String(5), { "1": "One", "3": "Three", "5": "Five" }); ➜ "Five"```
 * @example ```match(5, new Map([ ["5", "Oh no!"], [5, "OK"], ])); ➜ "OK"```
 * @example ```match(5, { 5: "Five" }, undefined, true); ➜ "Five"```
 */
export function match<Type>(
  value: any,
  subjectExpression: Record<string, Type> | Map<any, Type> | WeakMap<object, Type>,
  defaultValue: Type = undefined,
  convertToString: boolean = false,
): Type {
  if (!subjectExpression || typeof subjectExpression !== "object" || Array.isArray(subjectExpression)) {
    return defaultValue;
  }
  if (subjectExpression instanceof Map || subjectExpression instanceof WeakMap) {
    if (subjectExpression.has(value)) {
      return subjectExpression.get(value);
    }
    return defaultValue;
  }
  if (!convertToString && !isString(value)) {
    return defaultValue;
  }
  const key = String(value);
  if (key in subjectExpression) {
    return subjectExpression[key];
  }
  return defaultValue;
}
