import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "./src/index.js", // Set your entry JavaScript file
      output: {
        dir: "dist",
        format: 'es',
        entryFileNames: "index.[format].js", // Output JavaScript file format
      },
    },
  },
});
