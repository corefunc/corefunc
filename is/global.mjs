export default function isGlobal(value) {
  return ["[object global]", "[object Window]"].includes(Object.prototype.toString.call(value));
}
