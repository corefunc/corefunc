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
export declare function convertToJsonData(value: any, returnsUndefined?: boolean): boolean | null | number | string | undefined | unknown[] | Record<string, unknown>;
