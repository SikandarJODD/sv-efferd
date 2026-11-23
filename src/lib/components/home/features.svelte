<script lang="ts">
	import {
		FeatureBlocks,
		FeatureCode,
		FeaturePreview,
		FeatureResponsive,
		FeatureSkill,
		FeatureTerminal
	} from "#lib/components/icons/index.js";

	const features = [
		{
			icon: FeatureBlocks,
			title: "82 open-source blocks",
			description: "Marketing and app sections across 19 categories."
		},
		{
			icon: FeaturePreview,
			title: "Live previews",
			description: "Check every block before adding it to your project."
		},
		{
			icon: FeatureTerminal,
			title: "One-command install",
			description: "Add any block with the shadcn-svelte CLI."
		},
		{
			icon: FeatureCode,
			title: "Source stays yours",
			description: "Edit the Svelte 5 and Tailwind code in your app."
		},
		{
			icon: FeatureResponsive,
			title: "Responsive and themed",
			description: "Mobile layouts with light and dark modes included."
		},
		{
			icon: FeatureSkill,
			title: "Ready for coding agents",
			description: "A Skill, llms.txt, and metadata help agents choose and install blocks."
		}
	];
</script>

<section
	class="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24 md:px-4"
	aria-labelledby="features-title"
>
	<div class="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
		<div>
			<h2
				id="features-title"
				class="font-gp-circle pl-1 text-3xl font-medium text-foreground sm:text-4xl"
			>
				Svelte blocks, ready to use
			</h2>
			<p class="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
				Browse a block, preview it, and add the source to your project. Coding agents can
				follow the same path.
			</p>
		</div>

		<ul class="grid gap-x-10 gap-y-9 sm:grid-cols-2">
			{#each features as feature}
				<li class="flex items-start gap-4">
					<div
						class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-muted dark:text-primary"
					>
						<feature.icon class="size-5" aria-hidden="true" />
					</div>
					<div class="min-w-0 pt-0.5">
						<h3 class="text-base font-medium text-foreground">{feature.title}</h3>
						<p class="mt-1.5 text-sm leading-6 text-muted-foreground">
							{feature.description}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
