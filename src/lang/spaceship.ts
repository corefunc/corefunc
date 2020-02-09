// a <=> b :=
//     if a < b then return -1
//     if a = b then return  0
//     if a > b then return  1
/**
 * Combined comparison for JavaScript <=>
 * @param {*} valueOne
 * @param {*} valueTwo
 * @return {Number}
 */
function spaceship(valueOne, valueTwo) {
  if (isNaN(valueOne) && isNaN(valueTwo)) {
    return 0;
  } else if (valueOne === null || valueTwo === null || typeof valueOne !== typeof valueTwo) {
    if (valueOne > valueTwo) {
      return 1;
    } else if (valueOne < valueTwo) {
      return -1;
    }
    return 0;
  } else if (typeof valueOne === "string") {
    return valueOne.localeCompare(valueTwo);
  }
  if (valueOne > valueTwo) {
    return 1;
  } else if (valueOne < valueTwo) {
    return -1;
  }
  return 0;
}

export default spaceship;
