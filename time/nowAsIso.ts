import Moment from "moment";

import fnLocale from "@selfserve/utility/lang/locale";

/**
 * @param {String=} locale
 * @return {Array}
 * @example import fnNowAsIso from '@selfserve/utility/time/nowAsIso';
 */
function nowAsIso(locale) {
  let useLocale;
  if (locale) {
    useLocale = locale;
  } else {
    useLocale = fnLocale();
  }
  return (new Moment(Date.now())).locale(useLocale).toISOString();
}

export default nowAsIso;
