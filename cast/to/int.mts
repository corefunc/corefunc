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
export function castToInt(
  value: unknown,
  returnOnFail: number = 0,
  isNanFail: boolean = true,
  shouldBeSafe: boolean = true,
): number {
  const type = typeof value;
  if (type === "number") {
    if (Number.isFinite(value)) {
      if (!shouldBeSafe) {
        return Number.parseInt(value as string);
      }
      const int = Number.parseInt(value as string);
      if (int > Number.MAX_SAFE_INTEGER) {
        return Number.MAX_SAFE_INTEGER;
      } else if (int < Number.MIN_SAFE_INTEGER) {
        return Number.MIN_SAFE_INTEGER;
      } else {
        return int;
      }
    }
    if (Number.isNaN(value)) {
      if (isNanFail) {
        return returnOnFail;
      } else {
        return NaN;
      }
    }
    if (shouldBeSafe) {
      if (value === Number.POSITIVE_INFINITY) {
        return Number.MAX_SAFE_INTEGER;
      } else {
        return Number.MIN_SAFE_INTEGER;
      }
    }
    return value as number;
  }
  if (type === "string") {
    return castToInt(Number.parseInt(value as string), returnOnFail, isNanFail, shouldBeSafe);
  }
  if (type === "boolean") {
    return Number(value);
  }
  const casted = Number(value);
  if (Object.prototype.toString.call(value) === "[object Number]") {
    return castToInt(Number.parseInt(casted as unknown as string), returnOnFail, isNanFail, shouldBeSafe);
  }
  return castToInt(String(value), returnOnFail, isNanFail, shouldBeSafe);
}
