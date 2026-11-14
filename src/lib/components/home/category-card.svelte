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
	class="group relative block aspect-video rounded-md border transition-all duration-200 hover:border-muted-foreground/40"
	aria-label={`${title} - ${countLabel}`}
>
	<div class="group relative h-full">
		<PreviewComponent {title} {countLabel} />
	</div>
</a>
