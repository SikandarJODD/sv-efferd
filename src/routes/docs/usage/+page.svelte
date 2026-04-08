<script lang="ts">
	import DocsPage from "$lib/components/docs/docs-page.svelte";
	import H2 from "$lib/components/markdown/H2.svelte";
	import H3 from "$lib/components/markdown/H3.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import ListItem from "$lib/components/markdown/ListItem.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import Step from "$lib/components/markdown/Step.svelte";
	import Steps from "$lib/components/markdown/Steps.svelte";
	import UnorderedList from "$lib/components/markdown/UnorderedList.svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<DocsPage
	title="Usage"
	description="Once the registry is ready, Efferd works best as a fast browse-to-build loop: compare variants, install the exact block, then tailor it to your product."
>
	{#snippet actions()}
		<Button href="/blocks" size="sm">Browse Blocks</Button>
		<Button href="/docs/installation" size="sm" variant="outline">Review Installation</Button>
	{/snippet}

	<H2>Recommended workflow</H2>
	<Paragraph>
		Stay close to the block pages. They are where previews, source context, and install actions
		come together, which makes it easier to choose the right starting point before you pull code
		into your project.
	</Paragraph>

	<Steps class="mt-8">
		<Step>
			<H2 class="mt-0 text-xl">Start with the right category</H2>
			<Paragraph>
				Open <Link href="/blocks">Blocks</Link> and go to the section family that matches your
				page: hero, pricing, FAQ, footer, and so on.
			</Paragraph>
		</Step>

		<Step>
			<H2 class="mt-0 text-xl">Compare live variants first</H2>
			<Paragraph>
				Use the previews to judge spacing, content density, and layout structure. Pick the
				option that needs the least rewriting for your product.
			</Paragraph>
		</Step>

		<Step>
			<H2 class="mt-0 text-xl">Install from the exact block page</H2>
			<Paragraph>
				The install control on each block carries the block-specific registry URL, which is
				more reliable than using a generic command from memory.
			</Paragraph>
		</Step>

		<Step>
			<H2 class="mt-0 text-xl">Customize after add</H2>
			<Paragraph>
				Treat the generated code as a strong starting point. Replace placeholder content,
				align colors and spacing with your product, and remove anything the page does not
				need.
			</Paragraph>
		</Step>
	</Steps>

	<H2>What to check before shipping</H2>
	<UnorderedList>
		<ListItem
			>Make sure the chosen layout actually fits your real content and hierarchy.</ListItem
		>
		<ListItem>
			Review generated styles and dependencies so they sit cleanly inside your existing
			codebase.
		</ListItem>
		<ListItem>
			Keep an eye on the <Link href="/changelog">changelog</Link> if you want to revisit blocks
			as the library improves.
		</ListItem>
	</UnorderedList>

	<H3>Need setup first?</H3>
	<Paragraph>
		If the registry flow is not initialized yet, start with
		<Link href="/docs/installation">Installation</Link>. Once that is done, the block pages
		become the main day-to-day workflow.
	</Paragraph>
</DocsPage>
