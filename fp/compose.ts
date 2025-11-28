/**
 * @param {...Function} fns
 */
export function compose(...fns: ((...args: Array<unknown>) => unknown)[]): unknown {
  return fns.reduce(
    (prevFn, currFn) =>
      (...args) =>
        prevFn(currFn(...args)),
  );
}
