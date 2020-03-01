export default function highOrderPipe(fn: Function, ...restFns: Function[]): any {
  if (restFns.length === 0) {
    return fn;
  }
  return (...args) => restFns.reduce((result, nextFn) => nextFn(result), fn(...args));
}
