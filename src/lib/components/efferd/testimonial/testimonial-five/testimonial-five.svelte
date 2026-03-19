<script lang="ts">
	import { FullWidthDivider } from '$lib/components/ui/full-width-divider';
	import { GridFiller } from '$lib/components/ui/grid-filler';
	import TestimonialCard from './testimonial-card.svelte';

	type Testimonial = {
		name: string;
		role: string;
		image: string;
		company?: string;
		quote: string;
	};

	const testimonials: Testimonial[] = [
		{
			quote:
				'Efferd is so polished I might just retire and become a full-time potato farmer. The ecosystem is in safe hands.',
			image: 'https://github.com/shadcn.png',
			name: 'Shadcn',
			role: 'Founder',
			company: 'Shadcn UI'
		},
		{
			quote:
				'Efferd is why I still have hair. No more pulling it out over centering divs or fighting with CSS grid.',
			image: 'https://github.com/rauchg.png',
			name: 'Guillermo Rauch',
			role: 'CEO',
			company: 'Vercel'
		},
		{
			quote:
				"I tried to buy Efferd but they wouldn't sell. So I just bought Twitter instead to complain about it.",
			image: 'https://unavatar.io/x/elonmusk',
			name: 'Elon Musk',
			role: 'CEO',
			company: 'X.com'
		},
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
		},
		{
			quote:
				"We processed 100 petabytes of data to find the perfect UI library. The algorithm returned 'Efferd' with 99.9% confidence.",
			image: 'https://unavatar.io/x/sundarpichai',
			name: 'Sundar Pichai',
			role: 'CEO',
			company: 'Google'
		},
		{
			quote:
				'Our links might 404 sometimes, but thanks to Efferd, at least the 404 page looks absolutely stunning.',
			image: 'https://github.com/steven-tey.png',
			name: 'Steven Tey',
			role: 'Founder',
			company: 'Dub.co'
		},
		{
			quote:
				"It's so fast, I finished my UI sprint before my next meeting even started. Open source for the win.",
			image: 'https://unavatar.io/x/peer_rich',
			name: 'Peer Richelsen',
			role: 'Co-Founder',
			company: 'Cal.com'
		},
		{
			quote:
				"21st.dev brings in 100k users daily just to see Efferd. We got into YC solely because of this UI library. And yes, we're rich now.",
			image: 'https://github.com/serafimcloud.png',
			name: 'Serafim',
			role: 'Founder',
			company: '21st Labs.'
		},
		{
			quote:
				"I posted a video on Efferd components and it got more views than my cat video. That's statistically impossible.",
			image: 'https://github.com/TheOrcDev.png',
			name: 'OrcDev',
			role: 'Youtuber'
		}
	];
</script>

<div class="mx-auto min-h-screen max-w-5xl space-y-8 overflow-x-clip border-x py-6">
	<div class="flex flex-col gap-2 px-4 md:px-6">
		<h1 class="text-3xl font-semibold tracking-wide text-balance md:text-4xl xl:font-bold">
			Real Results, Real Voices
		</h1>
		<p class="text-sm text-muted-foreground md:text-base lg:text-lg">
			Used by thousands of developers to build beautiful, accessible, and performant web
			applications.
		</p>
	</div>
	<div class="relative grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
		<FullWidthDivider position="top" />
		{#each testimonials as testimonial}
			<TestimonialCard {testimonial} />
		{/each}

		<GridFiller
			class="bg-background"
			lgColumns={3}
			smColumns={2}
			totalItems={testimonials.length}
		/>
		<FullWidthDivider position="bottom" />
	</div>
</div>
