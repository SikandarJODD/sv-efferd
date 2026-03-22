<script lang="ts">
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { cn } from "$lib/utils";
	import {
		BlocksIcon,
		LayoutTemplateIcon,
		PackageOpenIcon,
		PaletteIcon,
		type Icon
	} from "@lucide/svelte";

	type Feature = {
		title: string;
		description: string;
		eyebrow: string;
		icon: typeof Icon;
		className?: string;
		iconWrapClass?: string;
	};

	const columns: Feature[][] = [
		[
			{
				eyebrow: "Premium blocks",
				title: "54 ready-to-use marketing blocks",
				description:
					"Includes hero, footer, CTA, blog, FAQ, contact, pricing, and more.",
				icon: BlocksIcon,
				className: "bg-linear-to-br from-secondary/40 via-background to-background",
				iconWrapClass: "bg-secondary/60"
			},
			{
				eyebrow: "Responsive UI",
				title: "Clean UI that works on all screen sizes",
				description:
					"Each block looks good on mobile, tablet, and desktop with modern spacing and layout.",
				icon: LayoutTemplateIcon,
				className:
					"bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--foreground)_8%,transparent)_0%,transparent_62%)]",
				iconWrapClass: "bg-background/80"
			}
		],
		[
			{
				eyebrow: "CLI install",
				title: "Install with the shadcn-svelte CLI",
				description:
					"Install blocks using the shadcn-svelte CLI for a seamless setup",
				icon: PackageOpenIcon,
				className:
					"bg-[radial-gradient(circle_at_left_top,color-mix(in_oklab,var(--foreground)_7%,transparent)_0%,transparent_60%)]",
				iconWrapClass: "bg-background/80"
			},
			{
				eyebrow: "Free & flexible",
				title: "Free, open source, and easy to customize",
				description:
					"Edit any block the way you want, with support for both light mode and dark mode.",
				icon: PaletteIcon,
				className: "bg-linear-to-tl from-secondary/35 via-background to-background",
				iconWrapClass: "bg-secondary/60"
			}
		]
	];
</script>

<section
	class="relative border-t border-dashed border-muted-foreground/40 px-4 pt-10 sm:px-6 sm:pt-16 pb-0! lg:px-8"
	aria-labelledby="features-title"
>
	<DecorIcon class="z-40 size-3.5 bg-background stroke-muted-foreground/80" position="top-left" />
	<DecorIcon
		class="z-50 size-3.5 bg-background stroke-muted-foreground/80"
		position="top-right"
	/>

	<div class="mx-auto max-w-7xl">
		<div
			class="relative overflow-hidden border border-dashed border-muted-foreground/40 bg-background backdrop-blur-sm"
		>
			<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
				<StripedPattern
					class="[mask-image:radial-gradient(circle_at_center,black,transparent_78%)] text-muted-foreground/[0.12]"
					direction="right"
				/>
				<div
					class="absolute inset-x-[14%] top-0 h-20 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--foreground)_8%,transparent)_0%,transparent_72%)] opacity-60 blur-2xl"
				></div>
			</div>


			<div class="relative border-b border-dashed border-muted-foreground/40 px-4 py-5 sm:px-6">
				<p
					class="text-[10px] font-medium tracking-[0.24em] text-muted-foreground uppercase"
				>
					Features
				</p>
				<h2
					id="features-title"
					class="mt-1.5 text-base font-semibold tracking-tight text-foreground sm:text-lg"
				>
					Simple blocks for fast Svelte builds
				</h2>
				<p class="mt-2 max-w-2xl text-xs leading-5 text-muted-foreground sm:text-sm">
					Build faster with clean blocks, easy setup, and simple customization.
				</p>
			</div>

			<div class="relative grid gap-4 p-4 sm:p-6 lg:grid-cols-2">
				{#each columns as column}
					<div class="grid gap-4 lg:grid-rows-2">
						{#each column as feature}
							{@const Icon = feature.icon}
							<div
								class={cn(
									"group relative min-h-[12rem] overflow-hidden border border-dashed border-border/80 bg-background/80 p-5 sm:min-h-[13rem] sm:p-6 lg:h-full lg:min-h-0",
									feature.className
								)}
							>
								<div
									aria-hidden="true"
									class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--foreground)_5%,transparent)_0%,transparent_65%)] opacity-80"
								></div>

								<div class="relative flex h-full flex-col justify-between gap-9">
									<div
										class={cn(
											"flex size-10 items-center justify-center rounded-none border border-dashed border-border/80 text-foreground shadow-xs",
											feature.iconWrapClass
										)}
									>
										<Icon class="size-4.5" strokeWidth={1.5} />
									</div>

									<div class="space-y-2.5">
										<p
											class="text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
										>
											{feature.eyebrow}
										</p>
										<h3
											class="max-w-sm text-base leading-6 font-semibold text-foreground"
										>
											{feature.title}
										</h3>
										<p
											class="max-w-md text-xs leading-6 text-muted-foreground sm:text-sm"
										>
											{feature.description}
										</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
