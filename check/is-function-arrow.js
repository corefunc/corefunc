export function checkIsFunctionArrow(callable) {
    if (!callable || typeof callable !== "function") {
        return false;
    }
    // After the typeof check above, `callable` is a function at runtime.
    // Cast to a safe function type to avoid the `Function` type usage.
    const fn = callable;
    const source = [...fn.toString()];
    let index = 0;
    let countParen = 0;
    let countBracket = 0;
    let char;
    let charLast;
    let charFirst;
    while (index < source.length) {
        char = source[index];
        if (char === "=" &&
            countParen === 0 &&
            countBracket === 0 &&
            index + 1 < source.length &&
            source[index + 1] === ">") {
            return true;
        }
        else if (char === "(" && !charFirst) {
            countParen++;
        }
        else if (char === ")" && !charFirst) {
            countParen--;
        }
        else if (char === "{" && !charFirst) {
            countBracket++;
        }
        else if (char === "}" && !charFirst) {
            countBracket--;
        }
        else if (char === '"' || char === "'" || char === "`") {
            if (charFirst && char === charFirst && charLast !== "\\") {
                charFirst = undefined;
            }
            else if (!charFirst) {
                charFirst = char;
            }
        }
        charLast = char;
        index++;
    }
    return false;
}
