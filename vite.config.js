import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      $app: path.resolve("./src/app"),
      $pages: path.resolve("./src/pages"),
      $widgets: path.resolve("./src/widgets"),
      $features: path.resolve("./src/features"),
      $shared: path.resolve("./src/shared"),
      $entities: path.resolve("./src/entities"),
    },
  },
});
