/**
 * @category Object Basic
 * @name objectBasicDeCycle
 * @description De-cycle object.
 * @summary ``````
 * @param {Object} object Object to de-cycle.
 * @param {String=} _path Path ot property to de-cycle.
 * @returns {Object} De-cycled object.
 * @since 0.1.55
 */
export function objectBasicDeCycle(object, _path) {
    const objects = [];
    const paths = [];
    return (function deReCycle(value, path) {
        let index;
        let name;
        if (typeof value === "object" &&
            value !== null &&
            !(value instanceof Boolean) &&
            !(value instanceof Date) &&
            !(value instanceof Number) &&
            !(value instanceof RegExp) &&
            !(value instanceof String)) {
            for (index = 0; index < objects.length; index++) {
                if (objects[index] === value) {
                    return { "&circularReference": paths[index] };
                }
            }
            objects.push(value);
            paths.push(path);
            if (Array.isArray(value)) {
                const newIterable = [];
                for (index = 0; index < value.length; index++) {
                    newIterable[index] = deReCycle(value[index], `${path}[${index}]`);
                }
                return newIterable;
            }
            else {
                const newIterable = Object.create(Object.getPrototypeOf(value));
                const objValue = value;
                for (name in objValue) {
                    if (Object.prototype.hasOwnProperty.call(objValue, name)) {
                        newIterable[name] = deReCycle(objValue[name], `${path}[${JSON.stringify(name)}]`);
                    }
                }
                return newIterable;
            }
        }
        return value;
    })(object, "&");
}
