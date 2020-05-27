export default function stringCamelize(text: string): string {
  return text.replace(/-(\w)/g, (_sub, camel) => (camel ? camel.toUpperCase() : ""));
}
