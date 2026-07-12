export type ChangelogChip = {
	label: string;
	href: string;
};

export type ChangelogEntry = {
	id: string;
	date: string;
	sortDate: string;
	title: string;
	description?: string;
	bullets?: string[];
	chips?: ChangelogChip[];
};

export type ChangelogPageData = {
	title: string;
	description: string;
	entries: ChangelogEntry[];
};

export const changelogPageData: ChangelogPageData = {
	title: "Changelog",
	description: "Latest product updates and new blocks.",
	entries: [
		{
			id: "2026-07-12",
			date: "12 July 2026",
			sortDate: "2026-07-12",
			title: "App Shell 2",
			description: "Added a new installable app shell block for dashboard-style layouts.",
			bullets: [
				"Registered app-shell-2 in the block registry with install metadata",
				"Added the new dashboard shell to the changelog with preview and block links"
			],
			chips: [
				{ label: "app-shell", href: "/blocks/app-shell" },
				{ label: "app-shell-2", href: "/preview/app-shell/2" }
			]
		},
		{
			id: "2026-03-22",
			date: "22 March 2026",
			sortDate: "2026-03-22",
			title: "54+ New Blocks",
			description: "Released a large batch of new blocks across all categories.",
			chips: [
				{ label: "hero", href: "/blocks/hero" },
				{ label: "contact", href: "/blocks/contact" },
				{ label: "faqs", href: "/blocks/faqs" },
				{ label: "footer", href: "/blocks/footer" },
				{ label: "pricing", href: "/blocks/pricing" },
				{ label: "auth", href: "/blocks/auth" }
			]
		}
		// {
		// 	id: '2026-03-19',
		// 	date: '19 March 2026',
		// 	sortDate: '2026-03-19',
		// 	title: 'More Block Variants',
		// 	description: 'Expanded core categories with more ready-to-use sections.',
		// 	bullets: [
		// 		'Added more hero, contact, and FAQ variants',
		// 		'Filled category gaps with simpler section options'
		// 	],
		// 	chips: [
		// 		{ label: 'hero-two', href: '#' },
		// 		{ label: 'contact variants', href: '#' },
		// 		{ label: 'faq blocks', href: '#' }
		// 	]
		// },
		// {
		// 	id: '2026-03-18',
		// 	date: '18 March 2026',
		// 	sortDate: '2026-03-18',
		// 	title: 'March Push Started',
		// 	description: 'Started the 4-day release push.',
		// 	bullets: [
		// 		'Planned the first block batch',
		// 		'Set the base direction for the full release'
		// 	],
		// 	chips: [
		// 		{ label: 'planning', href: '#' },
		// 		{ label: 'landing blocks', href: '#' },
		// 		{ label: 'release push', href: '#' }
		// 	]
		// }
	]
};
