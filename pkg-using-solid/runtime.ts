export function hydrate(fn: () => any, target: any) {
  const result = fn();
  return result;
}
