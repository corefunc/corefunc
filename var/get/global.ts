/**
 * @deprecated
 * @name varGetGlobal
 * @returns {NodeJS.Global|(WorkerGlobalScope & Window)|Window}
 */
// @ts-ignore
export function varGetGlobal(): NodeJS.Global | Window {
  if (typeof globalThis !== "undefined") {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    return globalThis;
  }
  if (typeof self !== "undefined") {
    // eslint-disable-next-line no-undef
    return self;
  }
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-undef
    return window;
  }
  // @ts-ignore
  if (typeof global !== "undefined") {
    // eslint-disable-next-line no-undef
    // @ts-ignore
    return global;
  }
  try {
    return Function("return this")();
  } catch {
    //
  }
  return undefined;
}
