import categoryData from "../../../content/categories.json";

export type BlockCategory = {
	slug: string;
	label: string;
	description: string;
	badge?: BlockCategoryBadge;
};

export type BlockCategoryBadge = "new" | "beta";

export type BlockCategorySlug = keyof typeof categoryData;

export const blockCategories = Object.entries(categoryData).map(([slug, category]) => ({
	slug: slug as BlockCategorySlug,
	label: category.label,
	description: category.description,
	...("badge" in category ? { badge: category.badge as BlockCategoryBadge } : {})
})) satisfies BlockCategory[];
