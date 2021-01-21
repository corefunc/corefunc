/**
 * @param {...Function} fns
 */
export function compose(...fns: ((...unknown) => unknown)[]): unknown {
  return fns.reduce((prevFn, currFn) => (...args) => prevFn(currFn(...args)));
}
