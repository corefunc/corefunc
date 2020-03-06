module.exports = function arrayBasicInsert(array, index, item) {
  return [...array.slice(0, index), item, ...array.slice(index)];
};
