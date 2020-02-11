/**
 * Checks if the value is created by the `Object` constructor.
 */
export default function isPlainObject(value): boolean {
  return !!value && typeof value === "object" && value.constructor === Object;
}
