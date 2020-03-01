export default function highOrderCompose(...functions) {
  return functions.reduce((func, apply) => (...args) => func(apply(...args)));
}
