"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToJsonData = void 0;
/**
 * @name convertToJsonData
 * @description Convert to JSON-only valida data type: boolean, null, number, string, array, plain object
 * @param {*} value
 * @param {Boolean=} returnsUndefined
 * @since 0.0.88
 */
function convertToJsonData(value, returnsUndefined = true) {
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
        return asNumber;
      }
    }
    if (value.includes("{") || value.includes("[")) {
      let asJSON;
      let isValidJSON = false;
      try {
        asJSON = JSON.parse(value);
        isValidJSON = true;
      } catch (_error) {
        //
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
      const asJSON = JSON.parse(JSON.stringify(value));
      const onObject = {};
      Object.keys(asJSON).forEach((key) => {
        onObject[key] = convertToJsonData(asJSON[key], returnsUndefined);
      });
      return onObject;
    } catch (_error) {
      //
    }
  }
  return onFailure;
}
exports.convertToJsonData = convertToJsonData;
