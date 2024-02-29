import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import svgr from "vite-plugin-svgr";
import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tsconfigPaths(),
		react(),
		tamaguiPlugin({
			config: "./src/tamagui.config.ts",
			components: ["tamagui"],
		}),

		svgr({
			svgrOptions: {
				svgo: true,
			},
		}),
		visualizer() as PluginOption,

		// optional:
		process.env.NODE_ENV === "production"
			? tamaguiExtractPlugin({
					config: "./src/tamagui.config.ts",
					components: ["tamagui"],
			  })
			: null,
	].filter(Boolean),
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
