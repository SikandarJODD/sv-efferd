<script lang="ts">
	type Feature = {
		title: string;
		description: string;
	};

	const features: Feature[] = [
		{
			title: "60+ marketing blocks",
			description:
				"Find heroes, pricing sections, FAQs, footers, and the other parts of a marketing site."
		},
		{
			title: "Svelte source you can edit",
			description: "Each block uses Svelte, Tailwind CSS, and shadcn-svelte components."
		},
		{
			title: "Install from the CLI",
			description: "Add a block with the shadcn-svelte CLI instead of copying files by hand."
		},
		{
			title: "Responsive by default",
			description:
				"Layouts adapt to phones, tablets, and desktops. Light and dark themes are included."
		}
	];
</script>

<section
	class="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24 md:px-4"
	aria-labelledby="features-title"
>
	<div class="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
		<div>
			<h2
				id="features-title"
				class="font-gp-circle pl-1 text-3xl font-medium text-foreground sm:text-4xl"
			>
				Features
			</h2>
			<p class="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
				Install complete marketing sections, then edit the Svelte source in your own
				codebase.
			</p>
		</div>

		<ol class="border-t border-border/70">
			{#each features as feature, index}
				<li class="grid grid-cols-[2rem_1fr] gap-4 border-b border-border/70 py-5 sm:py-6">
					<span class="font-mono text-xs text-muted-foreground">
						{String(index + 1).padStart(2, "0")}
					</span>
					<div>
						<h3 class="text-base font-medium text-foreground">{feature.title}</h3>
						<p class="mt-1.5 max-w-lg text-sm leading-6 text-muted-foreground">
							{feature.description}
						</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
