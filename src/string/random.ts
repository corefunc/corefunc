/**
 * Generate random string from latin characters and numbers
 * @param {Number} size
 * @return {String}
 */
function random(size) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let index = 0;
  let text = "";
  for (index; index < size; index += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export default random;
