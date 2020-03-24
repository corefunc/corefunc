export default function convertToHash(value, asString = true, seed = 0x811c9dc5) {
  const text = typeof value === "string" ? value : JSON.stringify(value);
  const length = text.length;
  let index = 0;
  let hashVal = seed;
  for (index; index < length; index += 1) {
    hashVal ^= text.charCodeAt(index);
    hashVal += (hashVal << 1) + (hashVal << 4) + (hashVal << 7) + (hashVal << 8) + (hashVal << 24);
  }
  if (asString) {
    return ("0000000" + (hashVal >>> 0).toString(16)).substr(-8);
  }
  return hashVal >>> 0;
}
