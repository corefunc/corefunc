/**
 * @param object
 * @param keys
 * @param sortAlphabetically
 */
export default function objectKeysOrder(object, keys = [], sortAlphabetically = false) {
  if (!Array.isArray(keys) || keys.length === 0) {
    return object;
  }
  const orderKeys = keys.filter((key) => typeof key === "string");
  let objectKeys = new Set(Object.keys(object));
  const newObject = {};
  orderKeys.forEach((key) => {
    objectKeys.delete(key);
    if (key in object) {
      newObject[key] = object[key];
    }
  });
  objectKeys = [...objectKeys];
  if (sortAlphabetically) {
    objectKeys = objectKeys.sort((alpha, beta) => alpha.localeCompare(beta));
  }
  objectKeys.forEach((key) => (newObject[key] = object[key]));
  return newObject;
}
