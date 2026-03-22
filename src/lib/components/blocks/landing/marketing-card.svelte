<script lang="ts">
	import { MagicCard } from "$lib/components/magic/magic-card";
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
	class="group relative block aspect-video rounded-xl border transition-all duration-200 hover:border-muted-foreground/40"
	aria-label={`${title} - ${countLabel}`}
>
	<!-- <MagicCard
		class="h-full overflow-hidden rounded-xl bg-background/90"
		gradientSize={120}
		gradientColor="#171717"
		gradientFrom="#525252"
		gradientTo="#262626"
	> -->
	<div class="relative h-full">
		<PreviewComponent {title} {countLabel} />
	</div>
	<!-- </MagicCard> -->
</a>
