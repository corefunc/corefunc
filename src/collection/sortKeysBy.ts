import fnIsObject from "lodash-es/isObject";
import isKeys from "lodash-es/keys";
import fnMap from "lodash-es/map";
import mapSortBy from "lodash-es/sortBy";
import fnZipObject from "lodash-es/zipObject";

function sortKeysBy(iterable, comparator, isDeep = true) {
  const objectKeys = mapSortBy(isKeys(iterable), (key) => {
    if (comparator) {
      if (isDeep && fnIsObject(iterable[key])) {
        return sortKeysBy(iterable[key], comparator, isDeep);
      }
      return comparator(iterable[key], key);
    }
    return key;
  });
  return fnZipObject(objectKeys, fnMap(objectKeys, key => iterable[key]));
}

export default sortKeysBy;
