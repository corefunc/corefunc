module.exports = function checkIsTrueish(value) {
  if (value === true || value === 1) {
    return true;
  }
  return typeof value === "string" && value.search(/^(?:yes|y|true|t|on|1)$/i) !== -1;
};
