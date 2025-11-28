import { arrayMakeClone } from "../make/clone.js";

/**
 * @name arrayBasicAssign
 * @description Copy items from one array into another by index, returning a new assigned array.
 * @param {Array} assignTo The destination array whose indices will be assigned.
 * @param {Array} assignFrom The source array providing values to assign.
 * @returns {Array} The resulting array with assigned values.
 */
export function arrayBasicAssign<T>(assignTo: Array<T>, assignFrom: Array<T>): Array<T> {
  const assignedArray = arrayMakeClone(assignTo);
  const from = arrayMakeClone(assignFrom);
  for (let index = 0; index < from.length; index++) {
    assignedArray[index] = from[index];
  }
  return assignedArray;
}
