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
 * @example Usage:
 * ```ts
 * match(String(5), { "1": "One", "3": "Three", "5": "Five" }); // ➜ "Five"
 * match(5, new Map([ ["5", "Oh no!"], [5, "OK"], ])); // ➜ "OK"
 * match(5, { 5: "Five" }, undefined, true); // ➜ "Five"
 * ```
 */
export declare function match<Type>(value: any, subjectExpression: Record<string, Type> | Map<any, Type> | WeakMap<object, Type>, defaultValue?: unknown, convertToString?: boolean): Type;
