export type BlockCategory = {
	slug: string;
	label: string;
};

export const blockCategories = [
	{ slug: "hero", label: "Hero" },
	{ slug: "header", label: "Header" },
	{ slug: "logo-cloud", label: "Logo Cloud" },
	{ slug: "features", label: "Features" },
	{ slug: "integrations", label: "Integrations" },
	{ slug: "testimonials", label: "Testimonials" },
	{ slug: "cta", label: "CTA" },
	{ slug: "pricing", label: "Pricing" },
	{ slug: "blog", label: "Blog" },
	{ slug: "auth", label: "Auth" },
	{ slug: "faqs", label: "FAQ's" },
	{ slug: "contact", label: "Contact" },
	{ slug: "footer", label: "Footer" },
	{ slug: "image-gallery", label: "Image Gallery" },
	{ slug: "not-found", label: "Not Found" }
] as const satisfies readonly BlockCategory[];

export type BlockCategorySlug = (typeof blockCategories)[number]["slug"];
