import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@routes": path.resolve(__dirname, "./src/routes")
    }
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true
  },

  preview: {
    port: 4173
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks: {
          react: [
            "react",
            "react-dom",
            "react-router-dom"
          ],

          mui: [
            "@mui/material",
            "@mui/icons-material"
          ],

          redux: [
            "@reduxjs/toolkit",
            "react-redux"
          ],

          charts: [
            "chart.js",
            "react-chartjs-2",
            "recharts"
          ],

          utilities: [
            "axios",
            "dayjs",
            "yup",
            "xlsx",
            "jspdf"
          ]
        }
      }
    }
  }
});