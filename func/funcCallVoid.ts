export default function funcCallVoid(callback: Function, args?: any[]) {
  if (!callback) {
    return;
  }
  // https://github.com/standard/eslint-plugin-standard/issues/12#issuecomment-298227852
  switch (Object.prototype.toString.call(callback)) {
    case "[object AsyncFunction]":
      // eslint-disable-next-line standard/no-callback-literal
      callback(...args)
        .then(() => {})
        .catch(() => {});
      break;
    case "[object Function]":
      try {
        // eslint-disable-next-line standard/no-callback-literal
        callback(...args);
      } catch (_error) {
        //
      }
      break;
  }
}
