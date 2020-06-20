/**
 * @param {...Function} fns
 */
function compose(...fns) {
  return fns.reduce((prevFn, currFn) => (...args) => prevFn(currFn(...args)));
}

export { compose };
