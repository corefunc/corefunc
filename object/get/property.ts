import { objectGetType } from "./type";

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
 */
export function objectGetProperty<
  ObjectType extends Record<string, any>,
  KeyType extends keyof ObjectType,
  DefaultType extends any,
>(
  object: ObjectType,
  keyOrPath: KeyType | string | string[],
  defaultValue?: DefaultType,
  valueType?:
    | "asyncfunction"
    | "array"
    | "boolean"
    | "date"
    | "error"
    | "function"
    | "generatorfunction"
    | "map"
    | "null"
    | "number"
    | "object"
    | "promise"
    | "proxy"
    | "regexp"
    | "set"
    | "string"
    | "symbol"
    | "undefined"
    | "weakmap"
    | "weakset",
): ObjectType[KeyType] | DefaultType {
  if (!object || typeof object !== "object") {
    return defaultValue as DefaultType;
  }
  if (typeof keyOrPath === "string" && keyOrPath in object) {
    if (object[keyOrPath] === undefined) {
      return defaultValue as DefaultType;
    }
    if (valueType && objectGetType(object[keyOrPath]) !== valueType) {
      return defaultValue as DefaultType;
    }
    return object[keyOrPath];
  }
  let keySet: string[];
  if (typeof keyOrPath === "string") {
    keySet = keyOrPath.split(".");
  } else if (Array.isArray(keyOrPath)) {
    keySet = keyOrPath as string[];
  } else {
    return defaultValue as DefaultType;
  }
  const length = keySet.length;
  if (length === 1) {
    if (keySet[0] in object) {
      if (object[keySet[0]] === undefined) {
        return defaultValue as DefaultType;
      }
      if (valueType && objectGetType(object[keySet[0]]) !== valueType) {
        return defaultValue as DefaultType;
      }
      return object[keySet[0]];
    } else {
      return defaultValue as DefaultType;
    }
  }
  let index = 0;
  let newObject;
  try {
    newObject = { ...object };
  } catch {
    try {
      newObject = JSON.parse(JSON.stringify(object));
    } catch {
      return defaultValue as DefaultType;
    }
  }
  let isSet = false;
  while (newObject !== null && index < length) {
    // @ts-ignore
    isSet = keySet[index] in newObject;
    newObject = newObject[keySet[index]];
    index += 1;
  }
  if (index && index === length) {
    if (newObject === undefined) {
      if (isSet) {
        if (valueType && objectGetType(newObject) !== valueType) {
          return defaultValue as DefaultType;
        }
        return newObject;
      }
      return defaultValue as DefaultType;
    } else {
      if (valueType && objectGetType(newObject) !== valueType) {
        return defaultValue as DefaultType;
      }
      return newObject;
    }
  } else {
    return defaultValue as DefaultType;
  }
}
