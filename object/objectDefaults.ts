function isHashObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function objectDefaults(destinationObject, sourceObject) {
  if (!isHashObject(destinationObject)) {
    return objectDefaults({}, sourceObject);
  }
  if (!isHashObject(sourceObject)) {
    return objectDefaults(destinationObject, {});
  }
  const obj = Object.assign({}, sourceObject);
  Object.keys(destinationObject).forEach(function (key) {
    if (key === "__proto__" || key === "constructor") {
      return;
    }
    const val = destinationObject[key];
    if (val === null) {
      return;
    }
    if (isHashObject(val) && isHashObject(obj[key])) {
      obj[key] = objectDefaults(val, obj[key]);
    } else {
      obj[key] = val;
    }
  });
  return obj;
}
