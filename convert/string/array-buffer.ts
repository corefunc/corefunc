/**
 * @name convertStringToArrayBuffer
 * @description Convert a string to an ArrayBuffer encoded as UTF-16 code units.
 * @param {string} text Text to convert.
 * @returns {ArrayBuffer} Allocated buffer with encoded text.
 */
export function convertStringToArrayBuffer(text: string): ArrayBuffer {
  const buf = new ArrayBuffer(text.length * 2);
  const bufView = new Uint16Array(buf);
  for (let index = 0, strLen = text.length; index < strLen; index++) {
    bufView[index] = text.charCodeAt(index);
  }
  return buf;
}
