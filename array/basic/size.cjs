module.exports = function arrayBasicSize(array) {
  return array.reduce((size) => size + 1, 0);
};
