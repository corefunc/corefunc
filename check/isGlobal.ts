import prototypeName from "../variable/prototypeName";
import TAG_GLOBAL from "../variable/tagGlobal";
import TAG_WINDOW from "../variable/tagWindow";

export default function checkIsGlobal(value: any): boolean {
  const valueTag = prototypeName(value);
  return valueTag === TAG_GLOBAL || valueTag === TAG_WINDOW;
}
