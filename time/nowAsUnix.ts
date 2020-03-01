import Moment from "moment";

/**
 * @param {String=} locale
 * @return {Array}
 */
function nowAsUnix(locale) {
  return new Moment(Date.now()).locale(locale).format("X");
}

export default nowAsUnix;
