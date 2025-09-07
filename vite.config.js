import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    allowedHosts: ["4baaf8fc42e8.ngrok-free.app"],
  },
  plugins: [react()],
  base: "/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
