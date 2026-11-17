<script lang="ts">
	import BlockPreview from "#lib/components/showcase/block-preview.svelte";
	import Seo from "#lib/components/site/seo.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Svelte Settings Blocks"
	desc="Browse Svelte settings blocks for profile, appearance, notification, and account preferences. Preview each layout and copy the source."
	link="/blocks/settings"
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
