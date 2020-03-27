/**
 * @name objectKeysOrder
 * @param {Object} instance
 * @param {Array.<string>} keys
 * @param {boolean=} alphabetize
 * @returns {Object}
 */
export default function objectKeysOrder<ObjectType extends object>(
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
