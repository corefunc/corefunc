// TypeScript
export function funcCallVoid(callback?: (..._args: unknown[]) => unknown | Promise<unknown>, args?: unknown[]): void {
  if (typeof callback !== "function") {
    return;
  }
  const callArgs = args ?? [];
  const tag = Object.prototype.toString.call(callback);
  switch (tag) {
    case "[object AsyncFunction]":
      (callback as (..._args: unknown[]) => Promise<unknown>)(...callArgs)
        .then(() => {})
        .catch(() => {});
      break;
    case "[object Function]":
      try {
        (callback as (..._args: unknown[]) => unknown)(...callArgs);
      } catch {
        // intentionally ignore exceptions
      }
      break;
  }
}
