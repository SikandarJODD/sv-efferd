<script lang="ts">
	import Seo from "#lib/components/base/Seo.svelte";
	import BlockPreview from "#lib/components/layout/BlockPreview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Svelte Image Gallery Blocks"
	desc="Browse responsive Svelte image gallery blocks for portfolios, products, and editorial layouts. Preview and copy the source."
	link="/blocks/image-gallery"
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
