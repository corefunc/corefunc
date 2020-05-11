"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayGetHead = require("../array/get/head.js").default;
const castToString = require("../cast/to/string.js").default;
const checkIsTraversable = require("../check/isTraversable.js").default;
const collectionValues = require("../collection/values.js").default;
const isString = require("../is/string.js").default;
/**
 * Replace all occurrences of the search string with the replacement string
 * @param {String} haystack
 * @param {Array|String} needle
 * @param {Array|String} replaceWith
 * @return {String}
 * @example regexReplace('target', 'search', 'replace');
 * @example regexReplace('target', ['search 1', 'searach 2'], 'replace');
 * @example regexReplace('target', ['search 1', 'searach 2'], ['replace 1', 'replace 2']);
 */
function regexReplace(haystack, needle, replaceWith) {
  let sTarget = castToString(haystack);
  let sSearch;
  let sReplace;
  if (isString(needle)) {
    sSearch = needle;
  } else if (checkIsTraversable(needle)) {
    sSearch = collectionValues(needle);
  } else {
    sSearch = castToString(needle);
  }
  if (isString(replaceWith)) {
    sReplace = replaceWith;
  } else if (checkIsTraversable(replaceWith)) {
    sReplace = collectionValues(replaceWith);
  } else {
    sReplace = castToString(replaceWith);
  }
  if (isString(sSearch) && isString(sReplace)) {
    return sTarget.split(sSearch).join(sReplace);
  }
  if (isString(sSearch)) {
    return sTarget.split(sSearch).join(castToString(arrayGetHead(sReplace)));
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
exports.default = regexReplace;
