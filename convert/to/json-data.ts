/**
 * @name convertToJsonData
 * @description Convert to JSON-only valid data type: boolean, null, number, string, array, plain object.
 * ⚠️ Warning:
 * This function may return `undefined` for invalid JSON strings unless `returnsUndefined` is set to `false`.
 * The usage of `convertToJsonData` is safe but can be slow for very large objects. Consider a manual deep-clone/sanitize loop if performance becomes critical.
 * This function aggressively parses strings (e.g., converting "true" to true, "123" to 123). Ensure this behavior is explicitly desired as standard JSON sanitization usually preserves data types.
 * @param {*} value
 * @param {Boolean=} returnsUndefined
 * @since 0.0.88
 */
export function convertToJsonData(
  value: any,
  returnsUndefined = true,
): boolean | null | number | string | undefined | unknown[] | Record<string, unknown> {
  if (value === null) {
    return null;
  }
  const onFailure = returnsUndefined ? undefined : null;
  if (value === undefined) {
    return onFailure;
  }
  const type = typeof value;
  if (type === "boolean") {
    return value;
  }
  if (type === "number") {
    return Number.isNaN(value) || !Number.isFinite(value) ? onFailure : value;
  }
  if (type === "string") {
    if (value.length === 4) {
      const lower = value.toLowerCase();
      if (lower === "true") {
        return true;
      } else if (lower === "false") {
        return false;
      } else if (lower === "null") {
        return null;
      }
    }
    if ((value.match(/[+-]?\d+(\.\d+)?/g) || []).map(Number).length) {
      const asNumber = Number.parseFloat(value);
      if (!Number.isNaN(asNumber) || Number.isFinite(asNumber)) {
        if (`${asNumber}`.length === value.length) {
          return asNumber;
        }
      }
    }
    if (value.includes("{") || value.includes("[")) {
      let asJSON;
      let isValidJSON = false;
      try {
        asJSON = JSON.parse(value);
        isValidJSON = true;
      } catch {
        // intentionally ignore errors
      }
      if (isValidJSON) {
        return asJSON;
      }
    }
    return value;
  }
  if (Array.isArray(value)) {
    return Object.values(value.map((arrayValue) => convertToJsonData(arrayValue)));
  }
  if (type === "object") {
    try {
      const asJSON: Record<string, unknown> = JSON.parse(JSON.stringify(value));
      const onObject: Record<string, unknown> = {};
      Object.keys(asJSON).forEach((key) => {
        onObject[key] = convertToJsonData(asJSON[key], returnsUndefined);
      });
      return onObject;
    } catch {
      // intentionally ignore errors
    }
  }
  return onFailure;
}
