// TypeScript
export function funcCallVoid(callback, args) {
    if (typeof callback !== "function") {
        return;
    }
    const callArgs = args ?? [];
    const tag = Object.prototype.toString.call(callback);
    switch (tag) {
        case "[object AsyncFunction]":
            callback(...callArgs)
                .then(() => { })
                .catch(() => { });
            break;
        case "[object Function]":
            try {
                callback(...callArgs);
            }
            catch {
                // intentionally ignore exceptions
            }
            break;
    }
}
