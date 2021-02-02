export function checkIsFunctionArrow<F extends Function>(callable: F): boolean {
  if (!callable || typeof callable !== "function") {
    return false;
  }
  const source: string[] = [...callable.toString()];
  let index: number = 0;
  let countParen: number = 0;
  let countBracket: number = 0;
  let char: string;
  let charLast: string;
  let charFirst: string;
  while (index < source.length) {
    char = source[index];
    if (
      char === "=" &&
      countParen === 0 &&
      countBracket === 0 &&
      index + 1 < source.length &&
      source[index + 1] === ">"
    ) {
      return true;
    } else if (char === "(" && !charFirst) {
      countParen++;
    } else if (char === ")" && !charFirst) {
      countParen--;
    } else if (char === "{" && !charFirst) {
      countBracket++;
    } else if (char === "}" && !charFirst) {
      countBracket--;
    } else if (char === '"' || char === "'" || char === "`") {
      if (charFirst && char === charFirst && charLast !== "\\") {
        charFirst = undefined;
      } else if (!charFirst) {
        charFirst = char;
      }
    }
    charLast = char;
    index++;
  }
  return false;
}
