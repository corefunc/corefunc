export default function stringSimilarity(stringFirst: string, stringSecond: string): number {
  stringFirst = stringFirst.replace(/\s+/g, "");
  stringSecond = stringSecond.replace(/\s+/g, "");
  if (!stringFirst.length && !stringSecond.length) {
    return 1;
  }
  if (!stringFirst.length || !stringSecond.length) {
    return 0;
  }
  if (stringFirst === stringSecond) {
    return 1;
  }
  if (stringFirst.length === 1 && stringSecond.length === 1) {
    return 0;
  }
  if (stringFirst.length < 2 || stringSecond.length < 2) {
    return 0;
  }
  const firstBigRams = new Map();
  for (let i = 0; i < stringFirst.length - 1; i += 1) {
    const bigRam = stringFirst.substring(i, i + 2);
    const count = firstBigRams.has(bigRam) ? firstBigRams.get(bigRam) + 1 : 1;
    firstBigRams.set(bigRam, count);
  }
  let intersectionSize = 0;
  for (let i = 0; i < stringSecond.length - 1; i += 1) {
    const bigRam = stringSecond.substring(i, i + 2);
    const count = firstBigRams.has(bigRam) ? firstBigRams.get(bigRam) : 0;
    if (count > 0) {
      firstBigRams.set(bigRam, count - 1);
      intersectionSize += 1;
    }
  }
  return (2.0 * intersectionSize) / (stringFirst.length + stringSecond.length - 2);
}
