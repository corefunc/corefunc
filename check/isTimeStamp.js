"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsTimeStamp = void 0;
/**
 * @description Checks if `value` is an time stamp
 * @param {*} theDate
 * @returns {boolean}
 */
function checkIsTimeStamp(theDate) {
    const date = new Date(`${theDate}`);
    return date > new Date("1970-01-01 00:00:01") && date < new Date("2038-01-19 03:14:07");
}
exports.checkIsTimeStamp = checkIsTimeStamp;
