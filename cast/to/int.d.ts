/**
 * @category Cast To
 * @name castToInt
 * @description Typecast variable to integer.
 * @param {*} value
 * @param {number} [returnOnFail=0] The return value in case of failure.
 * @param {boolean=} [isNanFail=true] Consider NaN as failed to parse value.
 * @param {boolean=} [shouldBeSafe=true] Fits integer between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER.
 * @returns {number} Any number.
 */
export declare function castToInt(value: unknown, returnOnFail?: number, isNanFail?: boolean, shouldBeSafe?: boolean): number;
