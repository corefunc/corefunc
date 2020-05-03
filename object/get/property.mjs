export default function objectGetProperty(object, key, defaultvalue) {
  if (key in object) {
    return object[key];
  }
  return defaultvalue;
}
