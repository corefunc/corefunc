import fnLzString from "lz-string";

/**
 * @param {Number=2} decompressionLevel
 * @return {Function}
 */
function lzStringDecompress(decompressionLevel = 2) {
  switch (Number.parseInt(decompressionLevel, 10) || 2) {
    case 1:
      return fnLzString.decompressFromEncodedURIComponent;
    case 3:
      return fnLzString.decompressFromUTF16;
    case 4:
      return fnLzString.decompress;
    default:
      return fnLzString.decompressFromBase64;
  }
}

export default lzStringDecompress;
