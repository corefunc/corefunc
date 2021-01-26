/**
 * @name langSleep
 * @description Sleep ES queue code execution for requested time
 * @param {Number} timeout
 * @returns {Promise<void>}
 */
export async function langSleep(timeout = 1) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
