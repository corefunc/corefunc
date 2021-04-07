/**
 * @name objectKeysSort
 * @param {Object} instance
 * @param {boolean=true} isDeep
 * @returns {*}
 */
export default function objectKeysSort<ObjectType extends object>(
  instance: ObjectType,
  isDeep: boolean = true,
): ObjectType {
  if (!instance || typeof instance !== "object" || Array.isArray(instance)) {
    return instance;
  }
  const keys = Object.keys(instance).sort((alpha, beta) => alpha.localeCompare(beta));
  if (!keys.length) {
    return instance;
  }
  return keys.reduce((sorted, key) => {
    if (isDeep && instance[key] && typeof instance[key] === "object" && !Array.isArray(instance[key])) {
      sorted[key] = objectKeysSort(instance[key], isDeep);
    } else {
      sorted[key] = instance[key];
    }
    return sorted;
  }, Object.create(Object.getPrototypeOf(instance))) as ObjectType;
}
