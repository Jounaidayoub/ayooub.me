import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { visualizer } from "rollup-plugin-visualizer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    allowedHosts:['b80371e532ff.ngrok-free.app','efa658266b99.ngrok-free.app','8d936db30979.ngrok-free.app','sixty-ravens-unite.loca.lt','react.loca.lt']
  }
  
});
