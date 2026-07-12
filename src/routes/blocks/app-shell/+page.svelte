<script lang="ts">
	import Seo from "$lib/components/base/Seo.svelte";
	import BlockPreview from "$lib/components/layout/BlockPreview.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<Seo
	title="App Shell Blocks"
	desc="Preview app shell block variants with reusable dashboard layouts, navigation structure, and install-ready source in Svelte Efferd."
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
