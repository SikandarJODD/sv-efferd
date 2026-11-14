export type OtherProject = {
	title: string;
	description: string;
	url: string;
	github: string;
	slug: string;
};

export const otherProjects: OtherProject[] = [
	{
		title: "Svelte Animations",
		description: "Svelte port of Magic UI, Spell UI, Fancy Components, and more.",
		url: "https://sv-animations.vercel.app/",
		github: "https://github.com/SikandarJODD/animations",
		slug: "svelte-animations"
	},
	{
		title: "Svelte Chan Components",
		description:
			"Status buttons, Slide to unlock, GitHub contributions, Elastic sliders, Apple carousels, and more.",
		url: "https://sv-chan.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-chanhdai",
		slug: "svelte-chan-components"
	},
	{
		title: "Svelte Marketing Blocks",
		description: "150+ reusable marketing sections and landing-page blocks.",
		url: "https://sv-blocks.vercel.app/",
		github: "https://github.com/SikandarJODD/cnblocks",
		slug: "svelte-marketing-blocks"
	},
	{
		title: "Svelte AI Elements",
		description: "Composable Svelte elements for AI product interfaces.",
		url: "https://svelte-ai-elements.vercel.app/",
		github: "https://github.com/SikandarJODD/ai-elements",
		slug: "svelte-ai-elements"
	},
	{
		title: "Svelte Particles",
		description: "Interactive particle effects and examples for Svelte.",
		url: "https://sv-particles.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-particles",
		slug: "svelte-particles"
	},
	{
		title: "Svelte Data Table Components",
		description: "20+ data table components, patterns, and practical examples.",
		url: "https://sv-table.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-table",
		slug: "svelte-data-table"
	},
	{
		title: "Svelte Globe Examples",
		description: "Interactive globe examples and visual experiments.",
		url: "https://sv-globe.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-globe",
		slug: "svelte-globe"
	},
	{
		title: "Svelte Dot Matrix Loaders",
		description: "50+ dot-matrix loaders, free and open-source.",
		url: "https://sv-matrix.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-matrix",
		slug: "svelte-dot-matrix-loaders"
	},
	{
		title: "Svelte Agentation",
		description: "Visual feedback and annotation tools for AI coding agents.",
		url: "https://sv-agentation.com/",
		github: "https://github.com/SikandarJODD/sv-agentation",
		slug: "svelte-agentation"
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
