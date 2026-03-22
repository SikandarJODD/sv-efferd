<script lang="ts">
	import type { Component } from "svelte";

	interface Props {
		title: string;
		href: string;
		countLabel: string;
		previewComponent: Component<{ title: string; countLabel: string }>;
	}

	let { title, href, countLabel, previewComponent: PreviewComponent }: Props = $props();
</script>

<a
	{href}
	class="group relative block aspect-video overflow-hidden rounded-md border border-border/80 bg-background/90 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
	data-sveltekit-preload-data="hover"
	aria-label={`${title} - ${countLabel}`}
>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--foreground)_7%,transparent)_0%,transparent_75%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
	></div>
	<div class="relative h-full">
		<PreviewComponent {title} {countLabel} />
	</div>
</a>
