<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils";
	import { XIcon } from "@lucide/svelte";

	const latestChange = {
		badge: "CHANGELOG",
		title: "Product update",
		description: "Performance boosts and UI polish.", // TIP: Use a single line of text for the description. (max 5 words)
		readMore: { href: "#", label: "Learn more" }
	} as const;

	let isOpen = $state(true);
</script>

{#if isOpen}
	<div
		class={cn(
			"group/latest-change size-full min-h-27 justify-center border-t",
			"relative flex size-full flex-col gap-1 overflow-hidden px-4 pt-3 pb-1 *:text-nowrap",
			"transition-opacity group-data-[collapsible=icon]:pointer-events-none group-data-[collapsible=icon]:opacity-0"
		)}
	>
		<span class="font-mono text-[10px] font-light text-muted-foreground">
			{latestChange.badge}
		</span>
		<p class="text-xs font-medium">{latestChange.title}</p>
		<span class="text-[10px] text-muted-foreground">
			{latestChange.description}
		</span>
		<Button
			class="w-max px-0 text-xs font-light"
			href={latestChange.readMore.href}
			size="sm"
			variant="link"
		>
			{latestChange.readMore.label}
		</Button>
		<Button
			class="absolute top-2 right-2 z-10 size-6 rounded-full opacity-0 transition-opacity group-hover/latest-change:opacity-100"
			onclick={() => (isOpen = false)}
			size="icon-sm"
			variant="ghost"
		>
			<XIcon class="size-3.5 text-muted-foreground" />{" "}
		</Button>
	</div>
{/if}
