/**
 * @category Object Basic
 * @name objectBasicDeCycle
 * @description De-cycle object.
 * @summary ``````
 * @param {Object} object Object to de-cycle.
 * @param {String=} _path Path ot property to de-cycle.
 * @returns {Object} De-cycled object.
 * @since 0.1.55
 */
export function objectBasicDeCycle<ObjectType extends Record<string, unknown> | unknown[]>(
  object: ObjectType,
  _path?: string,
): ObjectType {
  const objects: Array<ObjectType> = [];
  const paths: Array<string> = [];
  return (function deReCycle(value: unknown, path: string): unknown {
    let index: number;
    let name: string;
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
      objects.push(value as ObjectType);
      paths.push(path);

      if (Array.isArray(value)) {
        const newIterable: unknown[] = [];
        for (index = 0; index < (value as unknown[]).length; index++) {
          newIterable[index] = deReCycle(value[index], `${path}[${index}]`);
        }
        return newIterable;
      } else {
        const newIterable = Object.create(Object.getPrototypeOf(value));
        const objValue = value as Record<string, unknown>;
        for (name in objValue) {
          if (Object.prototype.hasOwnProperty.call(objValue, name)) {
            (newIterable as Record<string, unknown>)[name] = deReCycle(
              objValue[name],
              `${path}[${JSON.stringify(name)}]`,
            );
          }
        }
        return newIterable;
      }
    }
    return value;
  })(object, "&") as ObjectType;
}
