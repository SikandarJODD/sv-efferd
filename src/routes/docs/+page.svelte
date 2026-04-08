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
	description="Svelte Efferd is a growing collection of production-ready Svelte blocks designed to save build time without making the site feel generic."
>
	{#snippet actions()}
		<Button href="/blocks" size="sm">Browse Blocks</Button>
		<Button href="/changelog" size="sm" variant="outline">View Changelog</Button>
	{/snippet}

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
