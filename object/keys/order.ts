/**
 * @category Object Keys
 * @name objectKeysOrder
 * @description Order keys if can and return new object instance.
 * @summary ```import { objectKeysOrder } from "@corefunc/corefunc/object/keys/order";```
 * @param {Object} instance Object to be ordered.
 * @param {Array.<String>=} [keys=[]] Array of keys to order.
 * @param {Boolean=} [alphabetize=false] Alphabetize rest of keys.
 * @returns {Object} New object with ordered keys.
 */
export function objectKeysOrder<ObjectType extends object>(
  instance: ObjectType,
  keys: string[] = [],
  alphabetize: boolean = false,
): ObjectType {
  if (!Array.isArray(keys) || keys.length === 0) {
    return instance;
  }
  const orderKeys = keys.filter((key) => typeof key === "string");
  let objectKeys: string[] | Set<string> = new Set(Object.keys(instance));
  const newObject = {};
  orderKeys.forEach((key) => {
    (objectKeys as Set<string>).delete(key);
    if (key in instance) {
      newObject[key] = instance[key];
    }
  });
  objectKeys = [...objectKeys];
  if (alphabetize) {
    objectKeys = objectKeys.sort((alpha, beta) => alpha.localeCompare(beta));
  }
  objectKeys.forEach((key) => (newObject[key] = instance[key]));
  return newObject as ObjectType;
}
