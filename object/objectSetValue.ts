import isObject from "lodash-es/isObject";
import isSetType from "../is/isSetType";
import isMapType from "../is/isMapType";

export default function objectSetValue(object, key, value) {
  if (isObject(object) === false) {
    return object;
  }
  if (isMapType(object)) {
    object.set(key, value);
  }
  if (isSetType(object)) {
    if (arguments.length > 2) {
      object.add(value);
    } else {
      object.add(key);
    }
  } else {
    object[key] = value;
  }
  return object;
}
