"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexReplace = void 0;
const head_1 = require("../../array/get/head");
const string_1 = require("../../cast/to/string");
const isTraversable_1 = require("../../check/isTraversable");
const values_1 = require("../../collection/values");
const string_2 = require("../../is/string");
/**
 * Replace all occurrences of the search string with the replacement string
 * @param {String} haystack
 * @param {Array|String} needle
 * @param {Array|String} replaceWith
 * @return {String}
 * @example regexReplace('target', 'search', 'replace');
 * @example regexReplace('target', ['search 1', 'search 2'], 'replace');
 * @example regexReplace('target', ['search 1', 'search 2'], ['replace 1', 'replace 2']);
 */
function regexReplace(haystack, needle, replaceWith) {
    let sTarget = string_1.castToString(haystack);
    let sSearch;
    let sReplace;
    if (string_2.isString(needle)) {
        sSearch = needle;
    }
    else if (isTraversable_1.checkIsTraversable(needle)) {
        sSearch = values_1.collectionValues(needle);
    }
    else {
        sSearch = string_1.castToString(needle);
    }
    if (string_2.isString(replaceWith)) {
        sReplace = replaceWith;
    }
    else if (isTraversable_1.checkIsTraversable(replaceWith)) {
        sReplace = values_1.collectionValues(replaceWith);
    }
    else {
        sReplace = string_1.castToString(replaceWith);
    }
    if (string_2.isString(sSearch) && string_2.isString(sReplace)) {
        return sTarget.split(sSearch).join(sReplace);
    }
    if (string_2.isString(sSearch)) {
        return sTarget.split(sSearch).join(string_1.castToString(head_1.arrayGetHead(sReplace)));
    }
    if (string_2.isString(sReplace)) {
        sSearch.forEach((srch) => {
            sTarget = sTarget.split(string_1.castToString(srch)).join(sReplace);
        });
    }
    sSearch.forEach((srch, index) => {
        sTarget = sTarget.split(string_1.castToString(srch)).join(string_1.castToString(sReplace[index]));
    });
    return sTarget;
}
exports.regexReplace = regexReplace;
