<script lang="ts">
	import { page } from "$app/state";
	import { scrollY } from "svelte/reactivity/window";
	import Button from "$lib/components/ui/button/button.svelte";
	import type { Snippet } from "svelte";
	import { fly } from "svelte/transition";
	import CategoryNavigation from "$lib/components/layout/CategoryNavigation.svelte";

	let { children }: { children: Snippet } = $props();
	let visible = $derived(typeof scrollY.current === "undefined" ? 600 : scrollY.current > 1200);
	let isBlocksRoot = $derived(page.url.pathname === "/blocks");
</script>

<div>
	{#if !isBlocksRoot}
		<CategoryNavigation />
		<section>
			<div
				class="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"
			></div>
		</section>
	{/if}
	{@render children()}
	{#if visible}
		{@render scrollToTop()}
	{/if}
</div>

{#snippet scrollToTop()}
	<div in:fly={{ y: 20 }} out:fly={{ y: 20 }} class="fixed right-4 bottom-4 z-50">
		<Button
			size="icon"
			variant="secondary"
			class="rounded-full"
			onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 10l7-7m0 0l7 7m-7-7v18"
				/>
			</svg>
		</Button>
	</div>
{/snippet}
