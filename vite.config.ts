import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    visualizer({
          open: true, // Automatically open the report in the browser
          filename: 'bundle-analysis.html', // Output file name
          gzipSize: true, // Show gzipped size
        }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
