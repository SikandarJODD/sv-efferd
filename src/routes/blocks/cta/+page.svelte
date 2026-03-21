<script lang="ts">
	import BlockPreview from '$lib/components/layout/BlockPreview.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>CTA Blocks | Svelte Efferd Blocks</title>
	<meta
		name="description"
		content="Preview curated CTA block variants with a tree-style source explorer in Svelte Efferd Blocks."
	/>
</svelte:head>

<section class="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
	<div class="max-w-3xl">
		<p class="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">Blocks</p>
		<h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">CTA Blocks</h1>
		<p class="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
			Explore the first two CTA variants with live previews and a local file tree that mirrors
			the components behind each block.
		</p>
	</div>
</section>

{#each data.blocks as block (block.id)}
	<BlockPreview
		id={block.id}
		title={block.title}
		description={block.description}
		previewComponent={block.previewComponent}
		codeTree={block.codeTree}
		showInstall={false}
	/>
{/each}
