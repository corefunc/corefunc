import Moment from "moment";

/**
 * @param {String=} locale
 * @return {Array}
 */
function nowAsIso(locale) {
  return new Moment(Date.now()).locale(locale).toISOString();
}

export default nowAsIso;
