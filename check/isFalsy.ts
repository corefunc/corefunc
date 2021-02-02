export function checkIsFalsy(value: any): boolean {
  if (value === false || value === 0) {
    return true;
  }
  return typeof value === "string" && value.search(/^(?:no|n|false|f|off|0)$/i) !== -1;
}
