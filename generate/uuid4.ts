/**
 * @category Generate
 * @name generateUuid4
 * @description RFC4122 compliant UUID v4 generator.
 * @returns {string}
 */
export function generateUuid4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (text) => {
    const random = (Math.random() * 16) | 0,
      value = text === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}
