<script lang="ts">
	import DocsPage from "$lib/components/docs/docs-page.svelte";
	import H2 from "$lib/components/markdown/H2.svelte";
	import Link from "$lib/components/markdown/Link.svelte";
	import Paragraph from "$lib/components/markdown/Paragraph.svelte";
	import Step from "$lib/components/markdown/Step.svelte";
	import Steps from "$lib/components/markdown/Steps.svelte";
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
			<H2 class="mt-0 text-xl">Add from a block page</H2>
			<Paragraph>
				Once the registry is ready, browse <Link href="/blocks">the blocks directory</Link>,
				open the block you want, and use the install action from that page.
			</Paragraph>
			<Code.Root class="mt-4" code={addCommand} lang="bash" variant="secondary" />
		</Step>
	</Steps>

	<H2>After setup</H2>
	<Paragraph>
		After the registry is initialized, the main workflow moves to the block pages: compare
		variants, use the exact install control for the block you want, and customize the generated
		code locally. The <Link href="/docs/usage">Usage</Link> page covers that flow in more detail.
	</Paragraph>
</DocsPage>
