<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { cn } from "#lib/utils.js";
	import { XIcon } from "@lucide/svelte";

	const latestChange = {
		badge: "NEW",
		title: "Invoice exports",
		description: "CSV exports now include fees.",
		readMore: { href: "/", label: "View export update" }
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
			aria-label="Dismiss update"
			class="absolute top-1 right-1 z-10 size-8 rounded-full opacity-100 transition-opacity before:absolute before:-inset-1.5 md:opacity-0 md:group-hover/latest-change:opacity-100 md:focus-visible:opacity-100"
			onclick={() => (isOpen = false)}
			size="icon-sm"
			variant="ghost"
		>
			<XIcon class="size-3.5 text-muted-foreground" />{" "}
		</Button>
	</div>
{/if}
