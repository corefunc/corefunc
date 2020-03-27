import arrayMakeClone from "../make/clone";

export default function arrayBasicAssign(assignTo: any[], assignFrom: any[]): any {
  const assignedArray = arrayMakeClone(assignTo);
  const from = arrayMakeClone(assignFrom);
  for (let index = 0; index < from.length; index++) {
    assignedArray[index] = from[index];
  }
  return assignedArray;
}
