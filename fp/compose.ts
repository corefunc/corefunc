/**
 * @param {...Function} fns
 */
function compose(...fns: ((...unknown) => unknown)[]): unknown {
  return fns.reduce((prevFn, currFn) => (...args) => prevFn(currFn(...args)));
}

export { compose };
