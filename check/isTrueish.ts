export default function checkIsTrueish(value: any): boolean {
  return value === true || value === 1
    ? true
    : (typeof value === "string" && value.search(/^(?:yes|y|true|t|on|1)$/i) !== -1);
};
