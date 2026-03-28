import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  optimizeDeps: {
    entries: [
      "index.html",
      // Simulates what @tanstack/solid-start plugin does: adds a .tsx entry
      // from node_modules that contains JSX
      path.resolve("node_modules/pkg-using-solid/index.tsx"),
    ],
  },
  plugins: [solidPlugin()],
});
