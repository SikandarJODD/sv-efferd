import { error } from '@sveltejs/kit';

import { blockCategories, getBlockCategory } from '$lib/blocks/categories';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () =>
	blockCategories
		.filter(
			(category) => !('hasDedicatedPage' in category && Boolean(category.hasDedicatedPage))
		)
		.map((category) => ({ category: category.slug }));

export const load: PageLoad = ({ params }) => {
	const category = getBlockCategory(params.category);

	if (!category) {
		throw error(404, {
			message: `Unknown block category: ${params.category}`
		});
	}

	return {
		category
	};
};
