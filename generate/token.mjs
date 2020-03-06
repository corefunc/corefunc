export default function generateToken(size = 16) {
  const random = new Array(size);
  for (let index = 0; index < size; index++) {
    random[index] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 62)];
  }
  return random.join("");
}
