import path from "path";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'; // Importing the svgr plugin
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),   // React plugin
    svgr(),    // SVGR plugin for SVG imports
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' to src/
    },
  },
});
