<script lang="ts">
	import {
		BlocksIcon,
		Bookmark,
		LayoutTemplateIcon,
		PackageOpenIcon,
		type Icon
	} from "@lucide/svelte";

	type Feature = {
		title: string;
		description: string;
		icon: typeof Icon;
	};

	const features: Feature[] = [
		{
			title: "60 ready-to-use marketing blocks",
			description: "Includes hero, footer, CTA, blog, FAQ, contact, pricing, and more.",
			icon: BlocksIcon
		},
		{
			title: "Clean UI that works on all screen sizes",
			description:
				"Each block looks good on mobile, tablet, and desktop with modern spacing and layout.",
			icon: LayoutTemplateIcon
		},
		{
			title: "Install with the shadcn-svelte CLI",
			description: "Install blocks using the shadcn-svelte CLI for a seamless setup.",
			icon: PackageOpenIcon
		},
		{
			title: "Free, open source, and easy to customize",
			description:
				"Edit any block the way you want, with support for both light mode and dark mode.",
			icon: Bookmark
		}
	];
</script>

<section
	class="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24 md:px-4"
	aria-labelledby="features-title"
>
	<h2
		id="features-title"
		class="font-gp-circle pl-1 text-3xl font-medium text-foreground sm:text-4xl"
	>
		Features
	</h2>

	<div class="mt-4 grid gap-8 sm:grid-cols-2 md:mt-8 lg:gap-x-12 lg:gap-y-10">
		{#each features as feature}
			{@const Icon = feature.icon}
			<article class="flex items-start gap-4 rounded-lg border border-border/70 p-5">
				<Icon class="mt-0.5 size-5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
				<div>
					<h3 class="text-base font-semibold text-foreground">{feature.title}</h3>
					<p class="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
						{feature.description}
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>
