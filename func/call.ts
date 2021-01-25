export function functionCall<ArgumentsType extends any[], ReturnType>(
  functionToCall: (...args: ArgumentsType) => ReturnType,
  ...args: ArgumentsType
): ReturnType {
  return functionToCall(...args);
}
