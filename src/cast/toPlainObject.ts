import parse from "../json/parse";
import stringify from "../json/stringify";

export default function castToPlainObject(object: object, defaultValue: any = undefined): any {
  return parse(stringify(object, defaultValue), defaultValue);
}
