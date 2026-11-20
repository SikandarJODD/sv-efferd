<script lang="ts">
	import { MediaQuery } from "svelte/reactivity";

	type Props = {
		id: string;
		title: string;
		src: string;
		poster: string;
		caption: string;
	};

	let { id, title, src, poster, caption }: Props = $props();
	let reducedMotion = new MediaQuery("(prefers-reduced-motion: reduce)");
</script>

<figure class="mt-6">
	<video
		class="aspect-video w-full rounded-lg border bg-muted object-cover"
		{src}
		{poster}
		aria-label={title}
		aria-describedby={`${id}-caption`}
		autoplay={!reducedMotion.current}
		muted
		loop
		playsinline
		controls
		preload="metadata"
	></video>
	<figcaption id={`${id}-caption`} class="mt-2 text-sm leading-relaxed text-muted-foreground">
		{caption}
	</figcaption>
</figure>
