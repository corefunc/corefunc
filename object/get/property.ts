export function objectGetProperty(object: object, key: string, defaultvalue?: any): any {
  if (key in object) {
    return object[key];
  }
  return defaultvalue;
}

// export default function objectGetExistingProperty<
//   ObjectType extends object,
//   KeyType extends keyof ObjectType | string,
//   DefaultType extends any
//   >(object: ObjectType, key: KeyType, defaultValue?: DefaultType): ObjectType<KeyType> | DefaultType {
//   if (key in object) {
//     return object[key];
//   }
//   return defaultvalue;
// }
