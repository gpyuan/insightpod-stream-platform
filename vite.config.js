import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/insightpod-stream-platform/",
  css: {
    preprocessorOptions: {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    base: process.env.VITE_BASE_URL || "/",
  },
});
