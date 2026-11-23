export type OtherProject = {
	title: string;
	description: string;
	url: string;
	github: string;
	slug: string;
	badges: string[];
};

export type Library = {
	title: string;
	description: string;
	url?: string;
	github: string;
	slug: string;
	badges: string[];
};

export const otherProjects: OtherProject[] = [
	{
		title: "Svelte Animations",
		description: "Animated Svelte components from Magic UI, Spell UI, and Fancy Components.",
		url: "https://sv-animations.vercel.app/",
		github: "https://github.com/SikandarJODD/animations",
		slug: "svelte-animations",
		badges: ["100+ components", "Animations", "Svelte 5"]
	},
	{
		title: "Svelte Marketing Blocks",
		description: "Ready-made sections for Svelte landing pages.",
		url: "https://sv-blocks.vercel.app/",
		github: "https://github.com/SikandarJODD/cnblocks",
		slug: "svelte-marketing-blocks",
		badges: ["150+ blocks", "Landing pages", "Open source"]
	},
	{
		title: "Svelte Premium Marketing Blocks",
		description: "Polished sections for Svelte product and marketing sites.",
		url: "https://sv-efferd.pages.dev/",
		github: "https://github.com/SikandarJODD/sv-efferd",
		slug: "svelte-quality-marketing-blocks",
		badges: ["60+ blocks", "Marketing", "Svelte 5"]
	},
	{
		title: "Svelte AI Elements",
		description: "UI elements for chat and other AI apps built with Svelte.",
		url: "https://svelte-ai-elements.vercel.app/",
		github: "https://github.com/SikandarJODD/ai-elements",
		slug: "svelte-ai-elements",
		badges: ["AI UI", "Chat", "Svelte 5"]
	},
	{
		title: "Svelte Particles",
		description: "Particle effects and examples for Svelte sites.",
		url: "https://sv-particles.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-particles",
		slug: "svelte-particles",
		badges: ["Particles", "Interactive", "Svelte 5"]
	},
	{
		title: "Svelte Data Table Components",
		description: "Data table components and examples for Svelte apps.",
		url: "https://sv-table.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-table",
		slug: "svelte-data-table",
		badges: ["20+ tables", "Data tables", "Svelte 5"]
	},
	{
		title: "Svelte Globe Examples",
		description: "Interactive 3D globe examples for Svelte.",
		url: "https://sv-globe.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-globe",
		slug: "svelte-globe",
		badges: ["3D globes", "Interactive", "Svelte 5"]
	},
	{
		title: "Svelte Dot Matrix Loaders",
		description: "Dot-matrix loading animations for Svelte.",
		url: "https://sv-matrix.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-matrix",
		slug: "svelte-dot-matrix-loaders",
		badges: ["50+ loaders", "Animations", "Open source"]
	}
];

export const libraries: Library[] = [
	{
		title: "Svelte Agentation",
		description: "Add notes to a page and send them to AI coding agents.",
		url: "https://sv-agentation.com/",
		github: "https://github.com/SikandarJODD/sv-agentation",
		slug: "svelte-agentation",
		badges: ["sv-agentation", "Visual feedback", "Svelte 5"]
	},
	{
		title: "Svelte Drawesome",
		description: "Add a drawing toolbar to a Svelte 5 app.",
		github: "https://github.com/SikandarJODD/sv-drawesome",
		slug: "svelte-drawesome",
		badges: ["sv-drawesome", "Drawing", "Svelte 5"]
	},
	{
		title: "Svelte Pierre Words",
		description: "Render static or streaming Markdown in Svelte.",
		url: "https://sv-pierre.pages.dev/",
		github: "https://github.com/SikandarJODD/sv-pierre",
		slug: "svelte-pierre-words",
		badges: ["@sv-pierre/words", "Streaming Markdown", "Syntax highlighting"]
	}
];

export function withProjectUtm(url: string, content: string) {
	const trackedUrl = new URL(url);

	trackedUrl.searchParams.set("utm_source", "sv-efferd");
	trackedUrl.searchParams.set("utm_medium", "referral");
	trackedUrl.searchParams.set("utm_campaign", "other-projects");
	trackedUrl.searchParams.set("utm_content", content);

	return trackedUrl.toString();
}
