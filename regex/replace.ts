import arrayGetHead from "../array/get/head";
import castToString from "../cast/to/string";
import checkIsTraversable from "../check/isTraversable";
import collectionValues from "../collection/values";
import isString from "../is/string";

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
export default function regexReplace(
  haystack: string,
  needle: string,
  replaceWith: RegExp | RegExp[] | string | string[],
): string {
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
