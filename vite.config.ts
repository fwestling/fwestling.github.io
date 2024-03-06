/// <reference types="vitest" />
import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import svgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul' // or 'v8'
    },
    reporters: ['default', 'github-actions', 'html'],
    outputFile: 'test-results/test-report.html',
  },
  plugins: [
    tsconfigPaths(),
    react(),

    svgr({
      svgrOptions: {
        svgo: true,
      },
    }),

    TanStackRouterVite(),
    visualizer() as PluginOption,
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: Infinity,
        chunkFileNames: "chunk-[name].[hash].js",
        entryFileNames: "entry-[name].[hash].js",
      },
    },
  },
});
