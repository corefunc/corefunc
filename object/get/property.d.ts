/**
 * @category Object Get
 * @name objectGetProperty
 * @description Gets the value at path of object.
 * @summary ```import { objectGetProperty } from '@corefunc/corefunc/object/get/property';```
 * @param {Object} object Object to search in
 * @param {String|Array.<String>} keyOrPath String key or array of string to form path
 * @param {*=} [defaultValue=undefined] Default value if path is not exists. Does not replace undefined values
 * @param {string=} [valueType]
 * @returns {*} Value in path or default value
 * @since 0.0.47
 * @deprecated Use optional chaining instead
 * ```javascript
 * const value = object?.property?.subProperty ?? "N/A";
 * ```
 */
export declare function objectGetProperty<ObjectType extends Record<string, any>, KeyType extends keyof ObjectType, DefaultType extends any>(object: ObjectType, keyOrPath: KeyType | string | string[], defaultValue?: DefaultType, valueType?: "asyncfunction" | "array" | "boolean" | "date" | "error" | "function" | "generatorfunction" | "map" | "null" | "number" | "object" | "promise" | "proxy" | "regexp" | "set" | "string" | "symbol" | "undefined" | "weakmap" | "weakset"): ObjectType[KeyType] | DefaultType;
