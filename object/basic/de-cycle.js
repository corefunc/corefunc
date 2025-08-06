/**
 * @category Object Basic
 * @name objectBasicDeCycle
 * @description De-cycle object.
 * @summary ```import { objectBasicDeCycle } from '@corefunc/corefunc/object/basic/de-cycle';```
 * @param {Object} object Object to de-cycle.
 * @param {String=} _path Path ot property to de-cycle.
 * @returns {Object} De-cycled object.
 * @since 0.1.55
 */
export function objectBasicDeCycle(
  object,
  // eslint-disable-next-line no-unused-vars
  _path,
) {
  const objects = [];
  const paths = [];
  return (function deReCycle(value, path) {
    let index;
    let name;
    let newIterable;
    if (
      typeof value === "object" &&
      value !== null &&
      !(value instanceof Boolean) &&
      !(value instanceof Date) &&
      !(value instanceof Number) &&
      !(value instanceof RegExp) &&
      !(value instanceof String)
    ) {
      for (index = 0; index < objects.length; index++) {
        if (objects[index] === value) {
          return { "&circularReference": paths[index] };
        }
      }
      objects.push(value);
      paths.push(path);
      if (Object.prototype.toString.call(value) === "[object Array]") {
        newIterable = [];
        for (index = 0; index < (value).length; index++) {
          newIterable[index] = objectBasicDeCycle(value[index], `${path}[" + index + "]`);
        }
      } else {
        newIterable = Object.create(object);
        for (name in value) {
          if (Object.prototype.hasOwnProperty.call(value, name)) {
            newIterable[name] = objectBasicDeCycle(value[name], `${path}[${JSON.stringify(name)}]`);
          }
        }
      }
      return newIterable;
    }
    return value;
  })(object, "&");
}
