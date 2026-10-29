import adapter from "@sveltejs/adapter-static";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// vitePlugin: {
			// 	dynamicCompileOptions: ({ filename }) =>
			// 		filename.includes("node_modules") ? undefined : { runes: true },
			// 	inspector: {
			// 		toggleKeyCombo: "ctrl-shift",
			// 		holdMode: true,
			// 		showToggleButton: "always",
			// 		toggleButtonPos: "bottom-right"
			// 	}
			// },
			adapter: adapter(),
			alias: { $ui: "src/lib/components/ui" }
		})
	]
});
