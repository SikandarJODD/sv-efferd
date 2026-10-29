<script lang="ts">
	import Seo from "#lib/components/base/Seo.svelte";
	import BlockPreview from "#lib/components/layout/BlockPreview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="Svelte App Shell Blocks"
	desc="Browse Svelte app shell blocks for dashboards with sidebars, navigation, and responsive layouts. Copy or install the shadcn-svelte source."
	link="/blocks/app-shell"
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
