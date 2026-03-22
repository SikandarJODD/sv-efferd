<script lang="ts">
	import BlockPreview from "$lib/components/layout/BlockPreview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Auth Blocks | Svelte Efferd Blocks</title>
	<meta
		name="description"
		content="Preview curated auth block variants with a tree-style source explorer in Svelte Efferd Blocks."
	/>
</svelte:head>

{#each data.blocks as block (block.id)}
	<BlockPreview
		id={block.id}
		title={block.title}
		description={block.description}
		previewComponent={block.previewComponent}
		codeTree={block.codeTree}
		previewHref={block.previewHref}
		previewMode={block.previewMode}
		previewHeight={block.previewHeight}
		installId={block.installId}
	/>
{/each}
