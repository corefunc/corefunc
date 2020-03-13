module.exports = function convertArrayBufferToString(buffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buffer));
};
