/**
 * @category Generate
 * @name generateToken
 * @description Generate random string from latin characters and numbers.
 * @param {Number} [size=16]
 * @return {String}
 */
export function generateToken(size: number = 16): string {
  const random = new Array(size);
  for (let index = 0; index < size; index++) {
    random[index] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 62)];
  }
  return random.join("");
}
