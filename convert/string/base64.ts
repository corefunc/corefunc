export default function convertStringToBase64(text: string): string {
  // @ts-ignore
  if (typeof process !== "undefined" && process.release.name === "node") {
    // @ts-ignore
    return Buffer.from(text).toString("base64");
  } else {
    // eslint-disable-next-line no-undef
    return globalThis.btoa(text);
  }
}
