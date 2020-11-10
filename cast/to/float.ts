/**
 * Typecast variable to float
 * @name castToFloat
 * @param {*} variable
 * @param {*} [onFail=0] The return value in case of failure
 * @param {number} [toFixed=]
 * @returns {Number}
 * @example castToFloat("16.5"); // => 16.5
 */
export function castToFloat<D>(variable: unknown, onFail: D | number = 0, toFixed?: number): D | number {
  const type = typeof variable;
  if (type === "boolean") {
    return Number(variable);
  }
  if (type === "string") {
    const temporary = Number.parseFloat(variable as string);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    if (typeof toFixed === "number") {
      return Number.parseFloat(temporary.toFixed(toFixed));
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(variable as number)) {
    if (typeof toFixed === "number") {
      return Number.parseFloat(Number.parseFloat(variable as string).toFixed(toFixed));
    }
    return Number.parseFloat(variable as string);
  }
  return onFail;
}
