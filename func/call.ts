export function functionCall<ArgumentsType extends unknown[], ReturnType>(
  functionToCall: (..._args: ArgumentsType) => ReturnType,
  ...args: ArgumentsType
): ReturnType {
  return functionToCall(...args);
}
