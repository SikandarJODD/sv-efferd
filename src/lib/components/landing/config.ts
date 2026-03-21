export const landingNavLinks = [
	{
		label: 'Blocks',
		href: '#blocks'
	},
	{
		label: 'Docs',
		href: '#docs'
	},
	{
		label: 'Changelog',
		href: '#changelog'
	}
] as const;

export const landingSocialLinks = [
	{
		id: 'x',
		label: 'X',
		href: '#x'
	},
	{
		id: 'github',
		label: 'GitHub',
		href: '#github'
	}
] as const;

export const landingHero = {
	chip: '50 New Components',
	title: 'Svelte Efferd Blocks.',
	description:
		'Save hours of design time with clean, ready-to-use shadcn blocks that just work, modern, responsive, and built for speed.',
	primaryCta: {
		label: 'Explore',
		href: '#blocks'
	},
	secondaryCta: {
		label: 'Star on GitHub',
		href: '#github'
	}
} as const;
