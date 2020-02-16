export default function highOrderCompose(...fns: Function[]): any {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}
