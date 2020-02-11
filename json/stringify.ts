function serializer(replacer, cycleReplacerArg) {
  const keys = [];
  const stack = [];
  let cycleReplacer = cycleReplacerArg;
  if (cycleReplacer == null) {
    cycleReplacer = function cr(key, value) {
      if (stack[0] === value) {
        return "[Circular ~]";
      }
      return `[Circular ~.${keys.slice(0, stack.indexOf(value)).join(".")}]`;
    };
  }
  return function(key, value) {
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) {
        value = cycleReplacer.call(this, key, value);
      }
    } else {
      stack.push(value);
    }
    return replacer == null ? value : replacer.call(this, key, value);
  };
}

/**
 * @param {Object} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
function stringify(object, replacer, spaces, cycleReplacer) {
  return JSON.stringify(object, serializer(replacer, cycleReplacer), spaces);
}

export default stringify;
