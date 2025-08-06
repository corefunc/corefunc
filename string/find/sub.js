/**
 * Returns a section of a string.
 * @param {string=""} text
 * @param {number=0} begin
 * @param {number=} end
 * @returns {string}
 */
export function stringFindSub(text, begin, end) {
  if (
    !text ||
    typeof text !== "string" ||
    text.length === 0 ||
    !Number.isInteger(begin) ||
    (end !== undefined && !Number.isInteger(end))
  ) {
    return "";
  }
  let start = begin;
  if (start < 0) {
    start = 0;
  }
  if (start === 0 && end === undefined) {
    return text;
  }
  let chars = [...text];
  if (start === chars.length) {
    return "";
  }
  return chars.slice(start, end).join("");
}
