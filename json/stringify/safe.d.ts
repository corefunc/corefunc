type ReplacerType = (this: any, key: string, value: any) => any | null | undefined;
type CycleReplacerType = (key: string, value: any) => any | null | undefined;
/**
 * @param {*} value
 * @param {Function=} replacer
 * @param {Number|String=} spaces
 * @param {Function=} cycleReplacer
 * @returns {String}
 */
export declare function jsonStringifySafe(value: any, replacer?: ReplacerType, spaces?: string | number, cycleReplacer?: CycleReplacerType): string;
export {};
