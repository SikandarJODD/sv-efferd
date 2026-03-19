<script lang="ts">
	import { QuoteIcon } from '@lucide/svelte';

	type Testimonial = {
		quote: string;
		name: string;
		role: string;
		company?: string;
	};
	let {
		testimonial
	}: {
		testimonial: Testimonial;
	} = $props();
</script>

<figure class="p-6 md:p-8">
	<QuoteIcon aria-hidden="true" class="mb-4 size-12 stroke-1 text-muted-foreground" />

	<blockquote class="mb-6 text-base font-normal text-foreground md:text-lg">
		&quot;{testimonial.quote}&quot;
	</blockquote>

	<figcaption class="flex flex-col gap-0.5">
		<cite class="text-lg font-medium text-foreground not-italic">
			{testimonial.name}
		</cite>
		<p class="text-sm text-muted-foreground">
			{testimonial.role}
			{testimonial.company && `, ${testimonial.company}`}
		</p>
	</figcaption>
</figure>
