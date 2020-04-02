/**
 * @description Number.range & BigInt.range
 * @param {number | bigint} from - Number to generate from
 * @param {number | bigint =} to - Number to generate until
 * @param {number | bigint | undefined = } step - Generation step
 * @param {"number" | "bigint" = } type - Number type
 * @returns {bigint|number|undefined}
 */
function* CreateRangeIterator(from, to, step, type) {
  if (typeof from !== type) {
    throw new TypeError();
  }
  if (type !== "number" && type !== "bigint") {
    throw new TypeError();
  }
  const zero = type === "number" ? 0 : BigInt(0);
  const one = type === "number" ? 1 : BigInt(1);
  if (typeof to === "undefined") {
    to = from;
    from = zero;
  }
  if (typeof step === "undefined") {
    step = one;
  }
  if (typeof from !== type || typeof to !== type || typeof step !== type) {
    throw new TypeError();
  }
  if ((typeof from === "number" && !Number.isFinite(from)) || (typeof step === "number" && !Number.isFinite(step))) {
    throw new RangeError();
  }
  if (step === zero) {
    throw new RangeError();
  }
  if (Number.isNaN(from) || Number.isNaN(to) || Number.isNaN(step)) {
    return undefined;
  }
  const ifIncrease = to > from;
  const abs = (x) => (x >= (typeof x === "bigint" ? BigInt(0) : 0) ? x : -x);
  if (ifIncrease) {
    step = abs(step);
  } else step = -abs(step);
  let currentCount = one;
  let lastValue = from;
  if (ifIncrease) {
    while (!(lastValue >= to)) {
      let yielding = lastValue;
      lastValue = from + step * (currentCount as number);
      currentCount++;
      yield yielding;
    }
  } else {
    while (!(to >= lastValue)) {
      let yielding = lastValue;
      lastValue = from + step * (currentCount as number);
      currentCount++;
      yield yielding;
    }
  }
  return undefined;
}

function generateRange(from: number, to?: number, step?: number, type?: "number"): number[];
function generateRange(from: BigInt, to?: BigInt, step?: BigInt, type?: "bigint"): BigInt[];
/**
 * @name generateRange
 * @description Number.range & BigInt.range
 * @param {number|bigint|=0} from - Number from
 * @param {number|bigint|=undefined} to - Number to
 * @param {number|bigint|undefined|=1} step - Number step
 * @param {"number"|"bigint"|="number"} type - Number type
 * @returns {Array.<bigint|number>}
 */
function generateRange(
  from: number | BigInt = 0,
  to: number | BigInt = undefined,
  step: number | BigInt = 1,
  type: "number" | "bigint" = "number",
) {
  const array = [];
  for (const num of CreateRangeIterator(from, to, step, type)) {
    array.push(num);
  }
  return array;
}

export default generateRange;
