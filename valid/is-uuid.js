/**
 * @category Is Valid
 * @name isUUID
 * @description Check is value UUID
 * @param {*} value
 * @returns {boolean}
 * @since 0.0.94
 */
export function isUuid(value) {
  return (
    typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
  );
}
