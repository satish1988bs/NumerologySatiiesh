import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./client"),
        "@shared": resolve(__dirname, "./shared"),
      },
    },
    base: isProduction ? "./" : "/", // Different base for production vs development
    build: {
      outDir: "dist/spa",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, isProduction ? "index.production.html" : "index.html"),
        },
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['@radix-ui/react-slot', '@radix-ui/react-toast']
          }
        }
      },
    },
    server: {
      host: true,
      port: 8080,
    },
  };
});
