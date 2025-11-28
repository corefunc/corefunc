/**
 * @name convertToJsonData
 * @description Convert to JSON-only valid data type: boolean, null, number, string, array, plain object
 * @param {*} value
 * @param {Boolean=} returnsUndefined
 * @since 0.0.88
 */
export declare function convertToJsonData(value: any, returnsUndefined?: boolean): boolean | null | number | string | undefined | unknown[] | Record<string, unknown>;
