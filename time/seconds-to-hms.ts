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
export function timeSecondsToHms(secondsToHms: number): string {
  secondsToHms = Number(secondsToHms);
  const hours = Math.floor(secondsToHms / 3600);
  const minutes = Math.floor((secondsToHms % 3600) / 60);
  const seconds = Math.floor((secondsToHms % 3600) % 60);

  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
  }

  if (minutes > 0) {
    parts.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);
  }

  if (seconds > 0) {
    parts.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);
  }

  return parts.join(", ");
}
