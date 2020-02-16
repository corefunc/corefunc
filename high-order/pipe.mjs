export default function highOrderPipe(fn, ...restFns) {
  if (restFns.length === 0) {
    return fn;
  }
  return (...args) => restFns.reduce((result, nextFn) => nextFn(result), fn(...args));
};
