export default function objectLock(object: object): object {
  Object.freeze(object);
  Object.seal(object);
  Object.preventExtensions(object);
  return object;
}
