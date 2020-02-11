export default function arrayPull(array: any[], value: any): void {
  const indexOf = array.indexOf(value);
  if (indexOf === -1) {
    return;
  }
  array.splice(indexOf, 1);
  arrayPull(array, value);
}
