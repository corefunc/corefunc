"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicAssign = void 0;
const clone_1 = require("../make/clone.cjs");
function arrayBasicAssign(assignTo, assignFrom) {
  const assignedArray = clone_1.arrayMakeClone(assignTo);
  const from = clone_1.arrayMakeClone(assignFrom);
  for (let index = 0; index < from.length; index++) {
    assignedArray[index] = from[index];
  }
  return assignedArray;
}
exports.arrayBasicAssign = arrayBasicAssign;
