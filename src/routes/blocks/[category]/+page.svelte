<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.category.label} Blocks | Svelte Efferd Blocks</title>
	<meta
		name="description"
		content={`Preview shell for the ${data.category.label} block category in Svelte Efferd Blocks.`}
	/>
</svelte:head>

<section class="mx-auto flex min-h-[calc(100vh-8rem)] max-w-4xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
	<div class="rounded-2xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur">
		<p class="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
			Block Category
		</p>
		<h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
			{data.category.label}
		</h1>
		<p class="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
			This prerendered category page is ready for the upcoming {data.category.label} block
			showcase.
		</p>

		<div class="mt-8 rounded-xl border border-dashed border-border/80 bg-background/60 p-6">
			<p class="text-sm leading-6 text-muted-foreground">
				Placeholder shell only for now. The actual block variants for
				<code class="rounded bg-muted px-1.5 py-0.5 text-xs">{data.category.slug}</code>
				will be added in a future pass.
			</p>
		</div>
	</div>
</section>
