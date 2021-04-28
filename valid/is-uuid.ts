/**
 * @category Is Valid
 * @name isUuid
 * @description Check is value UUID
 * @param {*} value
 * @returns {Boolean}
 * @since 0.0.94
 * @see https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
 */
export function isUuid(value: any): boolean {
  return (
    typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
  );
}
