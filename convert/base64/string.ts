export default function convertBase64ToString(b64Encoded: string): string {
  // @ts-ignore
  if (typeof process !== "undefined" && process.release.name === "node") {
    // @ts-ignore
    return Buffer.from(b64Encoded, "base64").toString();
  } else {
    // eslint-disable-next-line no-undef
    return globalThis.atob(b64Encoded);
  }
}
