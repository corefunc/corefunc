/**
 * @name convertArrayBufferToString
 * @description Convert an ArrayBuffer containing UTF-16LE data to a string.
 * @param {ArrayBuffer} buffer Buffer to decode.
 * @returns {string} Decoded string.
 */
export function convertArrayBufferToString(buffer) {
    if (typeof TextDecoder !== "undefined") {
        return new TextDecoder("utf-16le").decode(new Uint8Array(buffer));
    }
    const codes = Array.from(new Uint16Array(buffer));
    return String.fromCharCode(...codes);
}
