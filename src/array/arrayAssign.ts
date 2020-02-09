import arrayClone from "./arrayClone";

export default function arrayAssign(assignTo: any[], assignFrom: any[]): any[] {
  const assignedArray = arrayClone(assignTo);
  const from = arrayClone(assignFrom);
  for (let index = 0; index < from.length; index += 1) {
    assignedArray[index] = from[index];
  }
  return assignedArray;
}
