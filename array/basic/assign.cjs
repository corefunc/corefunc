"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayMakeClone = require("../make/clone.cjs");
function arrayBasicAssign(assignTo, assignFrom) {
  const assignedArray = arrayMakeClone(assignTo);
  const from = arrayMakeClone(assignFrom);
  for (let index = 0; index < from.length; index++) {
    assignedArray[index] = from[index];
  }
  return assignedArray;
}
exports.default = arrayBasicAssign;
