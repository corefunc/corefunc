const arrayMakeClone = require("../make/clone.cjs");

module.exports = function arrayBasicAssign(assignTo, assignFrom) {
  const assignedArray = arrayMakeClone(assignTo);
  const from = arrayMakeClone(assignFrom);
  for (let index = 0; index < from.length; index += 1) {
    assignedArray[index] = from[index];
  }
  return assignedArray;
};