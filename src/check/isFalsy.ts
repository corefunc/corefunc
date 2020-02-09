export default function checkIsFalsy(value: any): boolean {
  return value === false || value === 0
    ? true
    : (typeof value === "string" && value.search(/^(?:no|n|false|f|off|0)$/i) !== -1);
};
