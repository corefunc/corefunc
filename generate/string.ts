/**
 * Generate random string from latin characters and numbers
 * @param {Number} size
 * @param {String} possible
 * @return {String}
 */
export function generateString(
  size: number,
  possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
): string {
  let index = 0;
  let text = "";
  for (index; index < size; index++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
