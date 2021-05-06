/**
 * @deprecated
 * @param map
 */
export function convertMapToObject(map) {
  const object = {};
  map.forEach((value, key) => {
    switch (typeof value) {
      case "string":
        object[key] = value;
        break;
      case "number":
        {
          const numericKey = value.toString();
          if (!map.has(numericKey)) {
            object[numericKey] = value;
          }
        }
        break;
      case "boolean":
        {
          const booleanKey = value.toString();
          if (!map.has(booleanKey)) {
            object[booleanKey] = value;
          }
        }
        break;
    }
  });
  return object;
}
