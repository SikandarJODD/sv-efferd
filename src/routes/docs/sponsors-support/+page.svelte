<script lang="ts">
	import DocsPage from "$lib/components/docs/docs-page.svelte";
	import { docsSupportLinks } from "$lib/components/docs/config";
	import H2 from "$lib/components/markdown/H2.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import ListItem from "$lib/components/markdown/ListItem.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import UnorderedList from "$lib/components/markdown/UnorderedList.svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<DocsPage
	title="Sponsors & Support"
	description="If Efferd saves you time, the easiest ways to help are starring the repo, sharing it, and reaching out with sponsorship interest."
>
	{#snippet actions()}
		<Button href={docsSupportLinks.githubRepo} size="sm" target="_blank" rel="noreferrer">
			Star on GitHub
		</Button>
		<Button
			href={docsSupportLinks.xShare}
			size="sm"
			target="_blank"
			rel="noreferrer"
			variant="outline"
		>
			Share on X
		</Button>
	{/snippet}

	<H2>Support the project</H2>
	<UnorderedList>
		<ListItem>
			Star the <Link href={docsSupportLinks.githubRepo}>GitHub repository</Link> to help more people
			discover the project.
		</ListItem>
		<ListItem>
			Share the project using the <Link href={docsSupportLinks.xShare}>X share link</Link> or by
			posting it directly to your own communities.
		</ListItem>
		<ListItem>
			If you want to discuss sponsorship or collaboration, reach out through the existing
			<Link href={docsSupportLinks.xProfile}>owner profile</Link>.
		</ListItem>
	</UnorderedList>

	<H2>Need help?</H2>
	<Paragraph>
		This first version of docs is intentionally small, so the best support path today is public:
		open an issue for bugs, send product feedback, or start a conversation around features that
		would make the library more useful.
	</Paragraph>
</DocsPage>
