import path from "path";
// import checker from 'vite-plugin-checker';
import { loadEnv, defineConfig } from "vite";
// import react from '@vitejs/plugin-react-swc';
import react from "@vitejs/plugin-react";

// ----------------------------------------------------------------------

const PORT = 5173;

// const env = loadEnv("all", process.cwd());

export default defineConfig({
  // base: '/ui',
  plugins: [
    react(),
    // checker({
    //   eslint: {
    //     lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
    //   },
    //   overlay: {
    //     position: 'tl',
    //     initialIsOpen: false,
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: PORT,
    host: true,
    allowedHosts: true,
  },
  preview: { port: PORT, host: true },
});
