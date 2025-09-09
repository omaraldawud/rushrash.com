import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    allowedHosts: ["4baaf8fc42e8.ngrok-free.app"],
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Vercel Dev's default port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Rewrite path to match your API route
      },
    },
  },
});
