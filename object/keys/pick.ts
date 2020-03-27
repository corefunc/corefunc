/**
 * @name objectKeysPick
 * @param {Object} instance
 * @param {Array.<string>} keys
 * @returns {Object}
 */
export default function objectKeysPick<ObjectType extends object, KeyType extends keyof ObjectType>(
  instance: ObjectType,
  keys: KeyType[],
): Partial<ObjectType> {
  if (!keys.length || !Object.keys(instance).length) {
    return {};
  }
  return keys.reduce((accumulator: ObjectType, key: KeyType) => {
    accumulator[key] = instance[key];
    return accumulator;
  }, {}) as Partial<ObjectType>;
}
