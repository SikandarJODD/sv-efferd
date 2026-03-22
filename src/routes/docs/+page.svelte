<script lang="ts">
	import { blockCategories } from "$lib/blocks/categories";
	import DocsPage from "$lib/components/docs/docs-page.svelte";
	import Blockquote from "$lib/components/markdown/Blockquote.svelte";
	import H2 from "$lib/components/markdown/H2.svelte";
	import H3 from "$lib/components/markdown/H3.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import ListItem from "$lib/components/markdown/ListItem.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import Strong from "$lib/components/markdown/Strong.svelte";
	import UnorderedList from "$lib/components/markdown/UnorderedList.svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<DocsPage
	title="Introduction"
	description="Efferd is a growing collection of production-ready Svelte blocks designed to save build time without making the site feel generic."
>
	{#snippet actions()}
		<Button href="/blocks" size="sm">Browse Blocks</Button>
		<Button href="/changelog" size="sm" variant="outline">View Changelog</Button>
	{/snippet}

	<H2>What you get</H2>
	<Paragraph>
		Efferd focuses on ready-to-explore UI blocks with live previews, copyable code, and a clear
		path to bringing them into your own project. The docs stay intentionally small so it is easy
		to understand the product before the template system lands.
	</Paragraph>

	<Blockquote>
		<Strong>Minimal by design.</Strong> The goal of this first docs pass is clarity: what the project
		is, how to install blocks, and where to follow progress.
	</Blockquote>

	<H2>Available block categories</H2>
	<Paragraph>
		The current library spans the following block families. These are sourced directly from the
		same category registry used on the blocks pages.
	</Paragraph>

	<div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
		{#each blockCategories as category (category.slug)}
			<div class="rounded-xl border border-border bg-card px-4 py-3 shadow-xs">
				<p class="text-sm font-medium text-foreground">{category.label}</p>
				<p class="mt-1 text-xs text-muted-foreground">`/blocks/{category.slug}`</p>
			</div>
		{/each}
	</div>

	<H2>Inspirations & credits</H2>
	<Paragraph>
		The project is shaped by the broader shadcn-style ecosystem: practical component registries,
		fast copy-and-adapt workflows, and polished examples that help teams move quickly.
	</Paragraph>

	<UnorderedList>
		<ListItem>
			Inspiration from clean registry-driven workflows and modern component libraries.
		</ListItem>
		<ListItem>
			Credits to the Svelte and shadcn-svelte ecosystem for the underlying patterns and
			tooling.
		</ListItem>
		<ListItem>
			Additional product updates live on the <Link href="/changelog">changelog</Link>.
		</ListItem>
	</UnorderedList>

	<H3>Start here</H3>
	<Paragraph>
		If you want to explore the library first, head to <Link href="/blocks">Blocks</Link>. If you
		already know what you want to add, jump to <Link href="/docs/installation"
			>Installation</Link
		>.
	</Paragraph>
</DocsPage>
