export default function stringSimilarity(alpha: string, beta: string): number {
  const strFirst = alpha.replace(/\s+/g, "");
  const strSecond = beta.replace(/\s+/g, "");
  if (!strFirst.length && !strSecond.length) {
    return 1;
  }
  if (!strFirst.length || !strSecond.length) {
    return 0;
  }
  if (strFirst === strSecond) {
    return 1;
  }
  if (strFirst.length === 1 && strSecond.length === 1) {
    return 0;
  }
  if (strFirst.length < 2 || strSecond.length < 2) {
    return 0;
  }
  const firstBigRams = new Map();
  for (let index = 0; index < strFirst.length - 1; index++) {
    const bigRam = strFirst.substring(index, index + 2);
    const count = firstBigRams.has(bigRam) ? firstBigRams.get(bigRam) + 1 : 1;
    firstBigRams.set(bigRam, count);
  }
  let intersectionSize = 0;
  for (let index = 0; index < strSecond.length - 1; index++) {
    const bigRam = strSecond.substring(index, index + 2);
    const count = firstBigRams.has(bigRam) ? firstBigRams.get(bigRam) : 0;
    if (count > 0) {
      firstBigRams.set(bigRam, count - 1);
      intersectionSize++;
    }
  }
  return (2.0 * intersectionSize) / (strFirst.length + strSecond.length - 2);
}
