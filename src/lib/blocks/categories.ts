export type BlockCategory = {
	slug: string;
	label: string;
	description: string;
	badge?: BlockCategoryBadge;
};

export type BlockCategoryBadge = "new" | "beta";

export const blockCategories = [
	{
		slug: "app-shell",
		label: "App Shell",
		description:
			"Dashboard and app layouts with sidebars, navigation, and responsive content areas.",
		badge: "new"
	},
	{
		slug: "settings",
		label: "Settings",
		description:
			"Settings pages for profiles, accounts, notifications, appearance, and preferences.",
		badge: "new"
	},
	{
		slug: "hero",
		label: "Hero",
		description: "Hero sections that introduce a product and guide visitors to the main action."
	},
	{
		slug: "header",
		label: "Header",
		description:
			"Responsive headers with navigation, menus, account actions, and mobile layouts."
	},
	{
		slug: "logo-cloud",
		label: "Logo Cloud",
		description: "Logo sections for customers, partners, sponsors, and integrations."
	},
	{
		slug: "features",
		label: "Features",
		description: "Feature sections that explain what a product does and why it matters."
	},
	{
		slug: "integrations",
		label: "Integrations",
		description: "Sections for showing the apps, tools, and services a product connects with."
	},
	{
		slug: "testimonials",
		label: "Testimonials",
		description: "Customer quote and review layouts for adding social proof to a page."
	},
	{
		slug: "team",
		label: "Team",
		description: "Team sections with member profiles, roles, social links, and hiring prompts."
	},
	{
		slug: "cta",
		label: "CTA",
		description: "Call-to-action sections for sign-ups, trials, downloads, and contact prompts."
	},
	{
		slug: "pricing",
		label: "Pricing",
		description:
			"Pricing layouts for plans, billing options, feature comparisons, and purchase actions."
	},
	{
		slug: "blog",
		label: "Blog",
		description: "Blog layouts for featured stories, article lists, and post previews."
	},
	{
		slug: "auth",
		label: "Auth",
		description:
			"Account access pages for sign-in, sign-up, password recovery, and verification."
	},
	{
		slug: "faqs",
		label: "FAQs",
		description: "FAQ sections that organize common questions in accordions and split layouts."
	},
	{
		slug: "contact",
		label: "Contact",
		description:
			"Contact sections with forms, support details, office locations, and response times."
	},
	{
		slug: "footer",
		label: "Footer",
		description:
			"Responsive footers with navigation, legal links, social profiles, and newsletter forms."
	},
	{
		slug: "image-gallery",
		label: "Image Gallery",
		description: "Gallery layouts for portfolios, product images, and editorial collections."
	},
	{
		slug: "not-found",
		label: "Not Found",
		description: "404 pages that explain what went wrong and help visitors find their way back."
	}
] as const satisfies readonly BlockCategory[];

export type BlockCategorySlug = (typeof blockCategories)[number]["slug"];
