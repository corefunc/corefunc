const checkIsIterable = require("./isIterable.cjs");
const checkIsObjectLike = require("./isObjectLike.cjs");

module.exports = function checkIsTraversable(value) {
  return Boolean(Array.isArray(value) || checkIsObjectLike(value) || checkIsIterable(value));
};
