const a = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];
const b = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const getLT20 = (n) => a[Number(n)];
const getGT20 = (n) => b[n[0]] + " " + a[n[1]];

/**
 * @category Text Basic
 * @name textFromNumber
 * @description Transform numbers to words in lakh / crore system.
 * @summary ```import { textFromNumber } from "@corefunc/corefunc/text/basic/from-number";```
 * @param {number} numberToWords - Number to be represented as words.
 * @returns {string} - Number in words.
 * @since 0.3.38
 * @see https://stackoverflow.com/questions/14766951/transform-numbers-to-words-in-lakh-crore-system
 */
export function textFromNumber(numberToWords) {
  const num = Number(numberToWords);
  if (Number.isNaN(num)) {
    return String(numberToWords);
  }
  if (num === 0) {
    if (Object.is(num, -0)) {
      return "negative zero";
    }
    return "zero";
  }
  const numStr = num.toString();
  if (numStr.length > 9) {
    return String(numberToWords);
  }
  const [, n1, n2, n3, n4, n5] = ("000000000" + numStr)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  let str = "";
  str += n1 != 0 ? (getLT20(n1) || getGT20(n1)) + "crore " : "";
  str += n2 != 0 ? (getLT20(n2) || getGT20(n2)) + "lakh " : "";
  str += n3 != 0 ? (getLT20(n3) || getGT20(n3)) + "thousand " : "";
  str += n4 != 0 ? getLT20(n4) + "hundred " : "";
  str += n5 != 0 && str != "" ? "and " : "";
  str += n5 != 0 ? getLT20(n5) || getGT20(n5) : "";
  return str.trim();
}
