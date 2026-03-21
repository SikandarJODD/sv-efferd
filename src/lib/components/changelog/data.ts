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
	title: 'Changelog',
	description: 'Latest product updates and new blocks.',
	entries: [
		{
			id: '2026-03-21',
			date: '21 March 2026',
			sortDate: '2026-03-21',
			title: '50+ New Blocks',
			description: 'Shipped a major block batch across the core library.',
			chips: [
				{ label: 'hero', href: '#' },
				{ label: 'contact', href: '#' },
				{ label: 'faqs', href: '#' },
				{ label: 'footer', href: '#' },
				{ label: 'pricing', href: '#' },
				{ label: 'auth', href: '#' }
			]
		},
		{
			id: '2026-03-20',
			date: '20 March 2026',
			sortDate: '2026-03-20',
			title: 'Landing Page Update',
			description: 'Built the first product-facing landing experience.',
			bullets: [
				'New site header and hero',
				'Improved mobile navigation and framing'
			],
			chips: [
				{ label: 'site-header', href: '#' },
				{ label: 'site-hero', href: '#' },
				{ label: 'dashed-lines', href: '#' }
			]
		},
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
