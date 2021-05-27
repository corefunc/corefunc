export function funcCallVoid(callback: Function, args?: any[]) {
  if (!callback) {
    return;
  }
  switch (Object.prototype.toString.call(callback)) {
    case "[object AsyncFunction]":
      callback(...args)
        .then(() => {})
        .catch(() => {});
      break;
    case "[object Function]":
      try {
        callback(...args);
      } catch (_error) {
        //
      }
      break;
  }
}
