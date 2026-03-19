<script lang="ts">
	import TestimonialCard from './testimonial-card.svelte';

	type Testimonial = {
		quote: string;
		name: string;
		role: string;
		company: string;
		image: string;
	};
	let testimonials: Testimonial[] = [
		{
			quote:
				"We just acquired Efferd for 3 gazillion dollars. We're calling it iEfferd. It's our best product yet.",
			image: 'https://unavatar.io/x/tim_cook',
			name: 'Tim Cook',
			role: 'CEO',
			company: 'Apple'
		},
		{
			quote:
				"I'm considering shipping Efferd components with Prime delivery. 2-day shipping on beautiful UIs? Done.",
			image: 'https://unavatar.io/x/JeffBezos',
			name: 'Jeff Bezos',
			role: 'Founder',
			company: 'Amazon'
		},
		{
			quote:
				"We're rewriting OpenAI's entire frontend in Efferd. The AGI told us it's the only logical choice.",
			image: 'https://unavatar.io/x/sama',
			name: 'Sam Altman',
			role: 'CEO',
			company: 'OpenAI'
		}
	];
</script>

<div class="mx-auto -mt-10 grid w-full max-w-5xl gap-8 md:grid-cols-3 md:gap-6">
	{#each testimonials as testimonial, index}
	<TestimonialCard {index} {testimonial} />
	{/each}
</div>
