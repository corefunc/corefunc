import test from "node:test";
import assert from "node:assert";

const describe = test.describe;
const expect = (actual) => {
  return {
    toBeGreaterThanOrEqual: (expected) => {
      return assert(actual >= expected);
    },
    toBeLessThanOrEqual: (expected) => {
      return assert(actual <= expected);
    },
    toEqual: (expected) => {
      return assert.equal(actual, expected);
    },
    toThrow: (expected) => {
      return assert.throws(actual, expected);
    }
  };
};
const it = test.it;

import { generateInteger } from "./integer.mjs";

describe("generateInteger_function", () => {
  // Tests that generateInteger returns a random integer between 0 and Number.MAX_SAFE_INTEGER when no arguments are passed
  it("test_generate_integer_happy_path", () => {
    const result = generateInteger();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  });

  // Tests that generateInteger returns a random integer between the specified minimum and maximum values
  it("test_generate_integer_happy_path_with_min_and_max", () => {
    const min = 10;
    const max = 20;
    const result = generateInteger(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  // Tests that generateInteger throws a RangeError when the minimum value is less than Number.MIN_SAFE_INTEGER
  it("test_generate_integer_edge_case_min_value", () => {
    const min = Number.MIN_SAFE_INTEGER - 1;
    expect(() => generateInteger(min)).toThrow(RangeError);
  });

  // Tests that generateInteger throws a RangeError when the maximum value is greater than Number.MAX_SAFE_INTEGER
  it("test_generate_integer_edge_case_max_value", () => {
    const max = Number.MAX_SAFE_INTEGER + 1;
    expect(() => generateInteger(0, max)).toThrow(RangeError);
  });

  // Tests that generateInteger throws a RangeError when the minimum value is greater than the maximum value
  it("test_generate_integer_edge_case_min_greater_than_max", () => {
    const min = 10;
    const max = 5;
    expect(() => generateInteger(min, max)).toThrow(RangeError);
  });

  // Tests that generateInteger returns the minimum value when the minimum and maximum values are equal
  it("test_generate_integer_edge_case_min_equals_max", () => {
    const min = 10;
    const max = 10;
    const result = generateInteger(min, max);
    expect(result).toEqual(min);
  });
});
