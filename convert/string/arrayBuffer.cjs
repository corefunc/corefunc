module.exports = function convertStringToArrayBuffer(text) {
  const buf = new ArrayBuffer(text.length * 2);
  const bufView = new Uint16Array(buf);
  for (let index = 0, strLen = text.length; index < strLen; index += 1) {
    bufView[index] = text.charCodeAt(index);
  }
  return buf;
};
