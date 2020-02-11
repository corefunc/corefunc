import fnLzString from "lz-string";

/**
 * @param {Number=2} compressionLevel
 * @return {Function}
 */
function lzStringCompress(compressionLevel = 2) {
  switch (Number.parseInt(compressionLevel, 10) || 2) {
    case 1:
      return fnLzString.compressToEncodedURIComponent;
    case 3:
      return fnLzString.compressToUTF16;
    case 4:
      return fnLzString.compress;
    default:
      return fnLzString.compressToBase64;
  }
}

export default lzStringCompress;
