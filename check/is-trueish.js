export function checkIsTrueish(value) {
    if (value === true || value === 1) {
        return true;
    }
    return typeof value === "string" && value.search(/^(?:yes|y|true|t|on|1)$/i) !== -1;
}
//# sourceMappingURL=is-trueish.js.map