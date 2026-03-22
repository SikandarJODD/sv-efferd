export type BlockCategory = {
	slug: string;
	label: string;
	sourceKey?: string;
	hasDedicatedPage?: boolean;
};

export const blockCategories = [
	{ slug: 'logo-cloud', label: 'Logo Cloud', hasDedicatedPage: true },
	{ slug: 'header', label: 'Header', hasDedicatedPage: true },
	{ slug: 'not-found', label: 'Not Found', hasDedicatedPage: true },
	{ slug: 'testimonials', label: 'Testimonials', sourceKey: 'testimonial' },
	{ slug: 'contact', label: 'Contact', hasDedicatedPage: true },
	{ slug: 'blog', label: 'Blog', sourceKey: 'blogs', hasDedicatedPage: true },
	{ slug: 'cta', label: 'CTA', hasDedicatedPage: true },
	{ slug: 'faqs', label: "FAQ's", hasDedicatedPage: true },
	{ slug: 'features', label: 'Features', hasDedicatedPage: true },
	{ slug: 'footer', label: 'Footer', hasDedicatedPage: true },
	{ slug: 'integrations', label: 'Integrations', hasDedicatedPage: true },
	{ slug: 'hero', label: 'Hero', hasDedicatedPage: true },
	{ slug: 'auth', label: 'Auth', hasDedicatedPage: true },
	{ slug: 'pricing', label: 'Pricing' },
	{ slug: 'image-gallery', label: 'Image Gallery' }
] as const satisfies readonly BlockCategory[];

export type BlockCategorySlug = (typeof blockCategories)[number]['slug'];
export type BlockCategoryEntry = (typeof blockCategories)[number];

const blockCategoryBySlug = new Map<string, BlockCategoryEntry>(
	blockCategories.map((category) => [category.slug, category] as const)
);

export function getBlockCategory(slug: string) {
	return blockCategoryBySlug.get(slug);
}
