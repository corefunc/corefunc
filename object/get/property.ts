export default function objectGetProperty<ObjectType extends object, KeyType extends keyof ObjectType>(
  object: ObjectType,
  key: KeyType,
) {
  return object[key];
}
