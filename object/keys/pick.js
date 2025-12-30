export function objectKeysPick(instance, keys, defineMissing) {
    const result = {};
    if (!keys.length || !Object.keys(instance ?? {}).length) {
        if (defineMissing) {
            for (const key of keys) {
                result[key] = undefined;
            }
        }
        return result;
    }
    for (const key of keys) {
        result[key] = instance[key];
    }
    return result;
}
