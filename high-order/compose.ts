/**
 * @description f . g = f(g(x))
 * @param {...function} functions
 * @returns {(...args: unknown[]) => unknown}
 * @example compose((y) => y + 5, (x) => x * 2) // 2 * 2 + 5 => 9
 */
export function highOrderCompose(
  ...functions: Array<(..._args: unknown[]) => unknown>
): (..._args: unknown[]) => unknown {
  if (functions.length === 0) {
    return (...args: unknown[]) => args[0];
  }

  return functions.reduce(
    (func, apply) =>
      (...args: unknown[]) =>
        func(apply(...args)),
  );
}
