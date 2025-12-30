/**
 * @name convertBase64ToString
 * @summary ```import { convertBase64ToString } from '@corefunc/corefunc/convert/base64/string';```
 * @category Convert Base64
 * @example
 * ```ts
 * convertBase64ToString("SGVsbG8gV29ybGQh"); // "Hello World!"
 * ```
 * @description Convert a Base64-encoded string to a plain string.
 * @param {string} b64Encoded Base64-encoded string.
 * @returns {string} Plain string.
 */
export default function convertBase64ToString(b64Encoded) {
    if (typeof globalThis.Buffer === "function") {
        return globalThis.Buffer.from(b64Encoded, "base64").toString();
    }
    else {
        return globalThis.atob(b64Encoded);
    }
}
