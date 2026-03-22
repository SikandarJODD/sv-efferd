<script lang="ts">
	import DocsPage from "$lib/components/docs/docs-page.svelte";
	import H2 from "$lib/components/markdown/H2.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import ListItem from "$lib/components/markdown/ListItem.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import Step from "$lib/components/markdown/Step.svelte";
	import Steps from "$lib/components/markdown/Steps.svelte";
	import UnorderedList from "$lib/components/markdown/UnorderedList.svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Code from "$lib/components/ui/code";

	const initCommand = "pnpm dlx shadcn-svelte@latest init shadcn-svelte";
	const addCommand = "pnpm dlx shadcn-svelte@latest add https://your-site/r/block-id.json";
</script>

<DocsPage
	title="Installation"
	description="Efferd follows the same registry-style flow already built into the block preview experience: initialize once, then add the block you want."
>
	{#snippet actions()}
		<Button href="/blocks" size="sm">Open Blocks</Button>
		<Button
			href="https://jsrepo.dev/docs/cli/add"
			size="sm"
			target="_blank"
			rel="noreferrer"
			variant="outline"
		>
			Registry Docs
		</Button>
	{/snippet}

	<H2>How installation works</H2>
	<Paragraph>
		The existing add UI in block previews already reflects a two-step flow. First you initialize
		the registry in your project. After that, each block can be added from its own generated
		registry URL.
	</Paragraph>

	<Steps class="mt-8">
		<Step>
			<H2 class="mt-0 text-xl">Initialize once</H2>
			<Paragraph>
				Run the init command for your package manager before adding blocks. The preview UI
				can copy this for you, but the underlying flow is the same.
			</Paragraph>
			<Code.Root class="mt-4" code={initCommand} lang="bash" variant="secondary" />
		</Step>

		<Step>
			<H2 class="mt-0 text-xl">Choose a block</H2>
			<Paragraph>
				Browse <Link href="/blocks">the blocks directory</Link>, open the block preview you
				want, and use the install action from that page.
			</Paragraph>
			<Code.Root class="mt-4" code={addCommand} lang="bash" variant="secondary" />
		</Step>

		<Step>
			<H2 class="mt-0 text-xl">Adjust after add</H2>
			<Paragraph>
				Treat the generated code as a strong starting point. Review styles, replace sample
				content, and tailor the block to match your product.
			</Paragraph>
		</Step>
	</Steps>

	<H2>Usage notes</H2>
	<UnorderedList>
		<ListItem>Use the block pages to compare variants before installing one.</ListItem>
		<ListItem>
			The install control on each block is more accurate than a generic docs button because it
			carries the correct block-specific registry URL.
		</ListItem>
		<ListItem>
			If you prefer to read product updates first, the <Link href="/changelog">changelog</Link
			>
			shows what has landed recently.
		</ListItem>
	</UnorderedList>
</DocsPage>
