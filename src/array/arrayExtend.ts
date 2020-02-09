import { arrayClone } from "./arrayClone";

export default function arrayExtend(alpha: any[], beta: any[]): any[] {
  const extendedArray = arrayClone(alpha);
  extendedArray.push(...arrayClone(beta));
  return extendedArray;
}
