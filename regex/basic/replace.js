import { arrayGetHead } from "../../array/get/head.js";
import { castToString } from "../../cast/to/string.js";
import { checkIsTraversable } from "../../check/is-traversable.js";
import { collectionValues } from "../../collection/values.js";
import { isString } from "../../is/string.js";
/**
 * @category RegEx Basic
 * @name regexReplace
 * @description Replace all occurrences of the search string with the replacement string
 * @param {String} haystack
 * @param {Array|String} needle
 * @param {Array|String} replaceWith
 * @returns {String}
 * @example regexReplace('target', 'search', 'replace');
 * @example regexReplace('target', ['search 1', 'search 2'], 'replace');
 * @example regexReplace('target', ['search 1', 'search 2'], ['replace 1', 'replace 2']);
 */
export function regexReplace(haystack, needle, replaceWith) {
    let sTarget = castToString(haystack);
    let sSearch;
    let sReplace;
    if (isString(needle)) {
        sSearch = needle;
    }
    else if (checkIsTraversable(needle)) {
        sSearch = collectionValues(needle);
    }
    else {
        sSearch = castToString(needle);
    }
    if (isString(replaceWith)) {
        sReplace = replaceWith;
    }
    else if (checkIsTraversable(replaceWith)) {
        sReplace = collectionValues(replaceWith);
    }
    else {
        sReplace = castToString(replaceWith);
    }
    if (isString(sSearch) && isString(sReplace)) {
        return sTarget.split(sSearch).join(sReplace);
    }
    if (isString(sSearch)) {
        if (Array.isArray(sReplace)) {
            return sTarget.split(sSearch).join(castToString(arrayGetHead(sReplace)));
        }
        return sTarget.split(sSearch).join(castToString(sReplace));
    }
    if (isString(sReplace)) {
        sSearch.forEach((srch) => {
            sTarget = sTarget.split(castToString(srch)).join(sReplace);
        });
    }
    sSearch.forEach((srch, index) => {
        sTarget = sTarget.split(castToString(srch)).join(castToString(sReplace[index]));
    });
    return sTarget;
}
