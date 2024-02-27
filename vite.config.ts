import { defineConfig, PluginOption } from "vite";
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    tsconfigPaths(),
    react(),

    svgr({
      svgrOptions: {
        svgo: true,
      },
    }),
    visualizer() as PluginOption,
    
  ],
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
})
