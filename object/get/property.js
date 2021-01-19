"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectGetProperty(object, key, defaultvalue) {
    if (key in object) {
        return object[key];
    }
    return defaultvalue;
}
exports.default = objectGetProperty;
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
