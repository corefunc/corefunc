/**
 * @param {...Function} fns
 */
export function compose(...fns) {
  return fns.reduce((prevFn, currFn) => (...args) => prevFn(currFn(...args)));
}
