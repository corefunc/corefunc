import fnToString from "lodash-es/toString";

function parseUnsafe(string, defaultResult) {
  let result = defaultResult;
  try {
    // noinspection Eslint
    result = eval(`(${fnToString(string)}`);
  } catch (exceptionOnEval) {
    //
  }
  return result;
}

export default parseUnsafe;
