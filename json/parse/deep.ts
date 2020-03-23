import checkIsTraversable from "../../check/isTraversable";
import collectionForEach from "../../collection/forEach";
import jsonParseSafe from "./safe";

export default function jsonParseDeep(string, defaultResult, reviver = null) {
  const parsed = jsonParseSafe(string, defaultResult, true, true, reviver);
  if (checkIsTraversable(parsed)) {
    collectionForEach(parsed, (value, key) => {
      parsed[key] = jsonParseDeep(value, value);
    });
  }
  return { ...parsed };
}
