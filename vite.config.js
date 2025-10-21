import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
    // https: true,
    // proxy: {
    //   "/": {
    //     target: "https://192.168.11.64:8000",
    //     changeOrigin: true,
    //     secure: false, // برای self-signed
    //   },
    // },
  },
  preview: { port: 5173, host: true, https: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
