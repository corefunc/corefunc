export default function variableType(value: any): boolean {
  return Object.prototype.toString.call(value).slice(1, -1).split(/[\s]+/u);
}
