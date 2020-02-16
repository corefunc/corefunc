export default function highOrderCompose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}
