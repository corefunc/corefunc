export default function highOrderCompose(...functions: Function[]): any {
  return functions.reduce((func, apply) => (...args) => func(apply(...args)));
}
