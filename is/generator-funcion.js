/**
 * @name isGeneratorFunction
 * @description Check whether a value is a GeneratorFunction.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a GeneratorFunction, otherwise false.
 */
export function isGeneratorFunction(value) {
    return Object.prototype.toString.call(value) === "[object GeneratorFunction]";
}
//# sourceMappingURL=generator-funcion.js.map