<script lang="ts">
	import DocsPage from "$lib/components/docs/docs-page.svelte";
	import { docsSupportLinks } from "$lib/components/docs/config";
	import H2 from "$lib/components/markdown/H2.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import ListItem from "$lib/components/markdown/ListItem.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import UnorderedList from "$lib/components/markdown/UnorderedList.svelte";
	import { Button } from "$lib/components/ui/button";

	const roadmapItems = ["Add SEO metatags", "Build templates", "Expand docs and product polish"];
</script>

<DocsPage
	title="Roadmap & Feedback"
	description="The roadmap is short on purpose right now: ship the essentials first, then iterate with feedback."
>
	{#snippet actions()}
		<Button href={docsSupportLinks.githubIssues} size="sm" target="_blank" rel="noreferrer">
			Open a GitHub Issue
		</Button>
	{/snippet}

	<H2>Current roadmap</H2>
	<UnorderedList>
		{#each roadmapItems as item (item)}
			<ListItem>{item}</ListItem>
		{/each}
	</UnorderedList>

	<H2>How to give feedback</H2>
	<Paragraph>
		If something feels missing, confusing, or broken, open a
		<Link href={docsSupportLinks.githubIssues}>GitHub issue</Link>. That is the clearest place
		to track fixes and feature requests as the docs and block library expand.
	</Paragraph>

	<Paragraph>
		For sponsorship interest or broader collaboration, use the owner contact path listed on the
		<Link href="/docs/sponsors-support">Sponsors & Support</Link> page.
	</Paragraph>
</DocsPage>
