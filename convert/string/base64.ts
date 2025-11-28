/**
 * @name convertStringToBase64
 * @description Convert a plain string to a Base64-encoded string.
 * @param {string} text Text to encode.
 * @returns {string} Base64-encoded string.
 */
export default function convertStringToBase64(text: string): string {
  if (typeof process !== "undefined" && process.release.name === "node") {
    return Buffer.from(text).toString("base64");
  } else {
    return globalThis.btoa(text);
  }
}
