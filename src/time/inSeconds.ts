import Moment from "moment";

/**
 * @example inSeconds(Number, String);
 * @example inSeconds(Number);
 * @example inSeconds(Object);
 * @example inSeconds(String);
 * @example inSeconds({
 *   seconds: 1,
 *   minutes: 2,
 *   hours: 3,
 *   days: 4,
 *   weeks: 5,
 *   months: 6,
 *   years: 7,
 * });
 * @return Number
 */
function inSeconds(...args) {
  return Moment.duration(...args).asSeconds();
}

export default inSeconds;
