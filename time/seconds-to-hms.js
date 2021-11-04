"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSecondsToHms = void 0;
/**
 * @category Time
 * @name timeSecondsToHms
 * @description Seconds to H:m:s
 * @summary ```import { match } from "@corefunc/corefunc/time/seconds-to-hms";```
 * @param {number} [secondsToHms]
 * @returns {string}
 * @since 0.3.12
 * @example ```timeSecondsToHms(1_800) ➜ "30 minutes"```
 * @example ```timeSecondsToHms(3_725) ➜ "1 hour, 2 minutes, 3 seconds"```
 */
function timeSecondsToHms(secondsToHms) {
    secondsToHms = Number(secondsToHms);
    const hours = Math.floor(secondsToHms / 3600);
    const minutes = Math.floor((secondsToHms % 3600) / 60);
    const seconds = Math.floor((secondsToHms % 3600) % 60);
    const hoursToDisplay = hours > 0 ? hours + (hours === 1 ? " hour" : " hours") + (minutes > 0 || seconds > 0 ? ", " : "") : "";
    const minutesToDisplay = minutes > 0 ? minutes + (minutes === 1 ? " minute" : " minutes") + (seconds > 0 ? ", " : "") : "";
    const secondsToDisplay = seconds > 0 ? seconds + (seconds === 1 ? " second" : " seconds") : "";
    return hoursToDisplay + minutesToDisplay + secondsToDisplay;
}
exports.timeSecondsToHms = timeSecondsToHms;
