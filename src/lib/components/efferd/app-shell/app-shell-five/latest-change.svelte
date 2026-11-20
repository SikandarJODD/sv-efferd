<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { XIcon } from "@lucide/svelte";

	const latestChange = {
		title: "Real-time funnels",
		description: "Build and analyze conversion funnels with live event streaming in real-time.",
		url: "#"
	} as const;
	let isOpen = $state(true);
</script>

{#if isOpen}
	<div class="group/latest-change z-20 size-full justify-center rounded-lg border bg-background">
		<div class="relative flex size-full flex-col gap-1.5 overflow-hidden px-3 pt-4 pb-1">
			<p class="font-heading text-xs font-medium">{latestChange.title}</p>
			<span class="text-[10px] text-muted-foreground">{latestChange.description}</span>
			<Button
				class="w-max px-0 text-xs font-light"
				href={latestChange.url}
				size="sm"
				variant="link">Read more</Button
			>
			<Button
				aria-label="Dismiss update"
				class="absolute top-2 right-2 z-10 size-6 rounded-full opacity-0 transition-opacity group-hover/latest-change:opacity-100 focus-visible:opacity-100"
				onclick={() => (isOpen = false)}
				size="icon-sm"
				variant="secondary"><XIcon class="size-3.5 text-muted-foreground" /></Button
			>
		</div>
	</div>
{/if}
