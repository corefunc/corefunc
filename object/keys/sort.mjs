/**
 * @name objectKeysSort
 * @param {*} value
 * @param {boolean=true} isDeep
 * @returns {*}
 */
export default function objectKeysSort(value, isDeep = true) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }
  const keys = Object.keys(value);
  if (!keys.length) {
    return value;
  }
  return keys.reduce((sorted, key) => {
    if (isDeep && value[key] && typeof value[key] === "object" && !Array.isArray(value[key])) {
      sorted[key] = objectKeysSort(value[key], isDeep);
    } else {
      sorted[key] = value[key];
    }
    return sorted;
  }, {});
}
