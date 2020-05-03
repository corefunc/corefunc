export default function objectGetProperty<
  ObjectType extends object,
  KeyType extends keyof ObjectType,
  DefaultType extends any
>(object: ObjectType, key: KeyType, defaultvalue?: DefaultType): ObjectType[KeyType] | DefaultType {
  if (key in object) {
    return object[key];
  }
  return defaultvalue;
}
