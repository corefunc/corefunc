import fnGet from "lodash-es/get";
import fnHead from "lodash-es/head";
import fnIsString from "lodash-es/isString";
import fnToString from "lodash-es/toString";

import fnIsTraversable from "../is/isTraversable";
import fnValues from "../collection/values";

/**
 * Replace all occurrences of the search string with the replacement string
 * @param {String} strTarget
 * @param {Array|String} anySearch
 * @param {Array|String} anyReplace
 * @return {String}
 * @example fnReplace('target', 'search', 'replace');
 * @example fnReplace('target', ['search 1', 'searach 2'], 'replace');
 * @example fnReplace('target', ['search 1', 'searach 2'], ['replace 1', 'replace 2']);
 */
function replace(strTarget, anySearch, anyReplace) {
  let sTarget = fnToString(strTarget);
  let sSearch;
  let sReplace;
  if (fnIsString(anySearch)) {
    sSearch = anySearch;
  } else if (fnIsTraversable(anySearch)) {
    sSearch = fnValues(anySearch);
  } else {
    sSearch = fnToString(anySearch);
  }
  if (fnIsString(anyReplace)) {
    sReplace = anyReplace;
  } else if (fnIsTraversable(anyReplace)) {
    sReplace = fnValues(anyReplace);
  } else {
    sReplace = fnToString(anyReplace);
  }
  if (fnIsString(sSearch) && fnIsString(sReplace)) {
    return sTarget.split(sSearch).join(sReplace);
  }
  if (fnIsString(sSearch)) {
    return sTarget.split(sSearch).join(fnToString(fnHead(sReplace)));
  }
  if (fnIsString(sReplace)) {
    sSearch.forEach((srch) => {
      sTarget = sTarget.split(fnToString(srch)).join(sReplace);
    });
  }
  sSearch.forEach((srch, index) => {
    sTarget = sTarget.split(fnToString(srch)).join(fnToString(fnGet(sReplace, index)));
  });
  return sTarget;
}

export default replace;
