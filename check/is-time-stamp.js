/**
 * @description Checks if `value` is a time stamp
 * @param {*} theDate
 * @returns {boolean}
 */
export function checkIsTimeStamp(theDate) {
    if (theDate === null || theDate === undefined) {
        return false;
    }
    // Bounds in milliseconds
    const minTime = Date.parse("1970-01-01 00:00:01");
    const maxTime = Date.parse("2038-01-19 03:14:07");
    // If input is a number, treat as timestamp (seconds or ms)
    if (typeof theDate === "number") {
        let ts = theDate;
        // Heuristic: if value looks like seconds (less than 1e12) treat as seconds
        if (ts < 1e12)
            ts = ts * 1000;
        return ts > minTime && ts < maxTime;
    }
    // If it's a purely-digit string, parse as numeric timestamp
    if (typeof theDate === "string") {
        const str = theDate.trim();
        if (/^\d+$/.test(str)) {
            let num = Number(str);
            if (num < 1e12)
                num = num * 1000; // seconds -> ms
            return num > minTime && num < maxTime;
        }
        // Otherwise, try Date.parse on readable date strings
        const parsed = Date.parse(str);
        if (Number.isNaN(parsed))
            return false;
        return parsed > minTime && parsed < maxTime;
    }
    // Other types are not accepted as timestamps
    return false;
}
