import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const fullName = String(data.get('fullName') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!fullName || !email || !message) {
			return fail(400, {
				error: 'Full name, email, and message are required.'
			});
		}

		return {
			success: true
		};
	}
};
