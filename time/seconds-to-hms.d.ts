/**
 * @category Time
 * @name timeSecondsToHms
 * @description Seconds to H:m:s
 * @summary ```import { match } from "@corefunc/corefunc/time/seconds-to-hms";```
 * @param {number} [secondsToHms]
 * @returns {string}
 * @since 0.3.12
 * @example Usage:
 * ```ts
 * timeSecondsToHms(1_800) // ➜ "30 minutes"
 * timeSecondsToHms(3_725) // ➜ "1 hour, 2 minutes, 3 seconds"
 * ```
 */
export declare function timeSecondsToHms(secondsToHms: number): string;
