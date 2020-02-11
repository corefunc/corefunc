import fnCloneDeep from "lodash-es/cloneDeep";
import fnForEach from "../collection/forEach";
import fnIsTraversable from "../is/isTraversable";
import fnParse from "./parse";
import objectSetValue from "../object/objectSetValue";

function parseDeep(string, defaultResult, reviver = null) {
  const parsed = fnParse(string, defaultResult, true, true, reviver);
  if (fnIsTraversable(parsed)) {
    fnForEach(parsed, (value, key) => {
      objectSetValue(parsed, key, parseDeep(value, value));
    });
  }
  return fnCloneDeep(parsed);
}

export default parseDeep;
