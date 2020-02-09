import Moment from "moment";

import fnLocale from "@selfserve/utility/lang/locale";

/**
 * @param {String=} locale
 * @return {Array}
 * @example import fnNowAsUnix from '@selfserve/utility/time/nowAsUnix';
 */
function nowAsUnix(locale) {
  let useLocale;
  if (locale) {
    useLocale = locale;
  } else {
    useLocale = fnLocale();
  }
  return (new Moment(Date.now())).locale(useLocale).format("X");
}

export default nowAsUnix;
