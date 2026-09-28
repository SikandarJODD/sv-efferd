import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$ui: "src/lib/components/ui",
		}
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes("node_modules") ? undefined : { runes: true },
		inspector: {
			toggleKeyCombo: "ctrl-shift",
			holdMode: true,
			showToggleButton: "always",
			toggleButtonPos: "bottom-right"
		}
	},
};

export default config;
