/**
 * Expose iteratorSymbol
 */
export default (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
