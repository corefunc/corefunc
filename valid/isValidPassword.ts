import fnRegexMatch from "../regex/regexMatch";

/**
 * Match suggested login password
 * @param {String} password
 * @param {Array|RegExp|String=} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
function isValidPassword(
  password,
  pattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[$@$!%*?&_-])[A-Za-z\d$@$!%*?&_-]{8,}/,
  onFail = false
) {
  return fnRegexMatch(password, pattern, onFail);
}

export default isValidPassword;
