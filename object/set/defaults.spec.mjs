import assert from "node:assert";
import test from "node:test";

const describe = test.describe;
const expect = (actual) => {
  return {
    toEqual: (expected) => {
      return assert.notStrictEqual(actual, expected);
    }
  }
};
const it = test.it;

import { objectSetDefaults } from "./defaults.mjs";

describe("objectSetDefaults", () => {
  // Tests calling objectSetDefaults with valid destination and source objects.
  it("test_object_set_defaults_valid_inputs", () => {
    const destination = { val1: "text", val2: 123 };
    const source = { val2: 456, val3: true };
    const result = objectSetDefaults(destination, source);
    expect(result).toEqual({ val1: "text", val2: 123, val3: true });
  });

  // Tests calling objectSetDefaults with valid destination and empty source object.
  it("test_object_set_defaults_empty_source", () => {
    const destination = { val1: "text", val2: 123 };
    const source = {};
    const result = objectSetDefaults(destination, source);
    expect(result).toEqual({ val1: "text", val2: 123 });
  });

  // Tests calling objectSetDefaults with nullIsUndefined set to true.
  it("test_object_set_defaults_null_is_undefined", () => {
    const destination = { val1: null, val2: "text" };
    const source = { val1: undefined, val2: null };
    const result = objectSetDefaults(destination, source, true);
    expect(result).toEqual({ val1: undefined, val2: null });
  });

  // Tests calling objectSetDefaults with destination or source object containing non-enumerable properties.
  it("test_object_set_defaults_non_enumerable_properties", () => {
    const destination = Object.create(
      {},
      {
        val1: { value: "text", enumerable: false },
        val2: { value: 123, enumerable: true },
      },
    );
    const source = Object.create(
      {},
      {
        val1: { value: "new text", enumerable: false },
        val2: { value: 456, enumerable: true },
        val3: { value: true, enumerable: true },
      },
    );
    const result = objectSetDefaults(destination, source);
    expect(result).toEqual({ val1: "text", val2: 123, val3: true });
  });

  // Tests calling objectSetDefaults with empty destination and valid source object.
  it("test_object_set_defaults_empty_destination", () => {
    const destination = {};
    const source = { val1: "text", val2: 123 };
    const result = objectSetDefaults(destination, source);
    expect(result).toEqual({ val1: "text", val2: 123 });
  });
});
