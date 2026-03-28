// Simulates a SolidJS package that uses TSX (like @tanstack/solid-start's client entry)
// Vite 8's dependency scanner will try to resolve react/jsx-dev-runtime from this .tsx file
export function render() {
  const el = <div>Hello from fake-solid-pkg</div>;
  return el;
}
