/**
 * Expose iteratorSymbol
 */
module.exports = (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
