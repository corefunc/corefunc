import arrayMakeClone from "../make/clone.mjs";

export default function arrayBasicAssign(assignTo, assignFrom) {
  const assignedArray = arrayMakeClone(assignTo);
  const from = arrayMakeClone(assignFrom);
  for (let index = 0; index < from.length; index++) {
    assignedArray[index] = from[index];
  }
  return assignedArray;
}
