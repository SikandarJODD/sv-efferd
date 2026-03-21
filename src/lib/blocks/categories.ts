export type BlockCategory = {
	slug: string;
	label: string;
	sourceKey?: string;
};

export const blockCategories = [
	{ slug: 'logo-cloud', label: 'Logo Cloud' },
	{ slug: 'header', label: 'Header' },
	{ slug: 'not-found', label: 'Not Found' },
	{ slug: 'testimonials', label: 'Testimonials', sourceKey: 'testimonial' },
	{ slug: 'contact', label: 'Contact' },
	{ slug: 'blog', label: 'Blog', sourceKey: 'blogs' },
	{ slug: 'cta', label: 'CTA' },
	{ slug: 'faqs', label: "FAQ's" },
	{ slug: 'features', label: 'Features' },
	{ slug: 'footer', label: 'Footer' },
	{ slug: 'integrations', label: 'Integrations' },
	{ slug: 'hero', label: 'Hero' },
	{ slug: 'auth', label: 'Auth' },
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
