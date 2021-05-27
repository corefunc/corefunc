/**
 * @category Promise
 * @name promiseWaitForever
 * @description Promise that never resolves.
 * @returns {Promise<undefined>}
 */
export function promiseWaitForever(): Promise<void> {
  return new Promise(() => {});
}
