import compareVersions from "compare-versions";

/**
 * call('10.1.8', '10.0.4'); //  1
 * call('10.0.1', '10.0.1'); //  0
 * call('10.1.1', '10.2.2'); // -1
 * @param {String} alpha
 * @param {String} beta
 * @returns {Number}
 */
function versionCompare(alpha, beta) {
  return compareVersions(alpha, beta);
}

export default versionCompare;
