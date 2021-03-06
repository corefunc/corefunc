/**
 * Checks if the value is created by the `Object` constructor.
 */
export function checkIsObjectPlain(value: any): boolean {
  return Boolean(value) && typeof value === "object" && value.constructor === Object && !Array.isArray(value);
}
