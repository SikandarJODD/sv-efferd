<script lang="ts">
	import Seo from "#lib/components/base/Seo.svelte";
	import BlockPreview from "#lib/components/layout/BlockPreview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Svelte Blog Blocks"
	desc="Browse Svelte blog blocks for article lists, featured posts, and content pages. Preview each layout and copy the source."
	link="/blocks/blog"
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
