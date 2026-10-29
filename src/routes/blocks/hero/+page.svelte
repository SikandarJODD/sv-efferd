<script lang="ts">
	import Seo from "#lib/components/base/Seo.svelte";
	import BlockPreview from "#lib/components/layout/BlockPreview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Svelte Hero Blocks"
	desc="Browse Svelte hero blocks for product and landing pages. Preview each layout, copy the source, or install it with shadcn-svelte."
	link="/blocks/hero"
/>

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
