export default function stringSimilarity(first: string, second: string): number {
  const stringFirst = first.replace(/\s+/g, "");
  const stringSecond = second.replace(/\s+/g, "");
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
  for (let index = 0; index < stringFirst.length - 1; index++) {
    const bigRam = stringFirst.substring(index, index + 2);
    const count = firstBigRams.has(bigRam) ? firstBigRams.get(bigRam) + 1 : 1;
    firstBigRams.set(bigRam, count);
  }
  let intersectionSize = 0;
  for (let index = 0; index < stringSecond.length - 1; index++) {
    const bigRam = stringSecond.substring(index, index + 2);
    const count = firstBigRams.has(bigRam) ? firstBigRams.get(bigRam) : 0;
    if (count > 0) {
      firstBigRams.set(bigRam, count - 1);
      intersectionSize++;
    }
  }
  return (2.0 * intersectionSize) / (stringFirst.length + stringSecond.length - 2);
}
