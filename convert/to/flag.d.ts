/**
 * @name convertToFlag
 * @description
 * Turns: undefined, null, 0, "0", "", "false", "FALSE", "n", "no", "of" to boolean false.
 * Turns: 1, 1n, "1", "true", "TRUE", "on", "y", "yes" to boolean true.
 * @summary ```import { convertToFlag } from "@corefunc/corefunc/convert/to/flag";```
 * @param {*} value
 * @param {*=false} onEmpty
 * @param {*=onEmpty} onUnParsable
 * @returns {boolean}
 */
export declare function convertToFlag(value: any, onEmpty?: boolean, onUnParsable?: boolean): boolean;
