import fnIsObjectLike from "lodash-es/isObjectLike";

/**
 * Whether the object has the specified property
 * @param object
 * @param propertyName
 * @return {Boolean}
 */
function propertyHasOwn(object, propertyName) {
  if (!object) {
    return false;
  }
  if (fnIsObjectLike(object) === false) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, `${propertyName}`);
}

export default propertyHasOwn;
