export default function stringCamelize(text) {
  return text.replace(/-(\w)/g, (_sub, camel) => (camel ? camel.toUpperCase() : ""));
}
