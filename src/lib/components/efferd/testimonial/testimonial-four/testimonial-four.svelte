<script lang="ts">
	import { FullWidthDivider } from '$lib/components/ui/full-width-divider';
	import TestimonialCard from './testimonial-card.svelte';

	type Testimonial = {
		quote: string;
		name: string;
		role: string;
		company?: string;
	};

	const testimonials: Testimonial[] = [
		{
			quote:
				'Efferd is so polished I might just retire and become a full-time potato farmer. The ecosystem is in safe hands.',
			name: 'Shadcn',
			role: 'Founder',
			company: 'Shadcn UI'
		},
		{
			quote:
				'Efferd is why I still have hair. No more pulling it out over centering divs or fighting with CSS grid.',
			name: 'Guillermo Rauch',
			role: 'CEO',
			company: 'Vercel'
		},

		{
			quote:
				"I tried to buy Efferd but they wouldn't sell. So I just bought Twitter instead to complain about it.",
			name: 'Elon Musk',
			role: 'CEO',
			company: 'X.com'
		}
	];
</script>

<section class="relative mx-auto min-h-screen w-full max-w-4xl place-content-center border-x">
	<FullWidthDivider />
	<div class="grid md:grid-cols-[2fr_1px_1fr]">
		<div class="divide-y">
			{#each testimonials.slice(0, 2) as testimonial}
				<TestimonialCard {testimonial} />
			{/each}
		</div>
		<div class="h-px bg-border md:h-auto"></div>
		<div class="flex items-center">
			<TestimonialCard testimonial={testimonials[2] as Testimonial} />
		</div>
	</div>
	<FullWidthDivider />
</section>
