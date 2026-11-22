<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";
	import { Annotation } from "#lib/components/ui/annotation/index.js";
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";

	const credits = [
		{
			note: "Original Creator",
			annotationDirection: "e",
			annotationColor: "light-dark(var(--color-ink), var(--color-emerald-500))",
			name: "Shaban",
			description: "Designed the original version that inspired this Svelte adaptation.",
			href: "https://x.com/shabanwtf",
			handle: "@shabanhr",
			avatar: "https://avatars.githubusercontent.com/u/179793504?v=4",
			initials: "S"
		},
		{
			note: "Svelte Port By",
			annotationDirection: "s",
			annotationColor: "light-dark(var(--color-amber-500), var(--color-amber-500))",
			name: "Bhide Svelte",
			description: "Ported all components to Svelte 😁",
			href: "https://x.com/Sikandar_Bhide",
			handle: "@Sikandar_Bhide",
			avatar: "https://avatars.githubusercontent.com/u/93428946?v=4",
			initials: "BS"
		}
	] as const;
</script>

<section
	class="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24 md:px-4"
	aria-labelledby="credits-title"
>
	<h2
		id="credits-title"
		class="font-gp-circle pl-1 text-3xl font-medium text-foreground sm:text-4xl"
	>
		Credits
	</h2>

	<div class="mt-4 grid gap-6 sm:grid-cols-2 md:mt-8">
		{#each credits as person}
			<article>
				<a
					class="group flex items-start gap-4 rounded-lg border border-border/70 p-5 transition-colors hover:border-foreground/20 hover:bg-muted/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
					href={person.href}
					target="_blank"
					rel="noreferrer"
					aria-label={`Open ${person.name}'s X profile`}
				>
					<Annotation
						note={person.note}
						direction={person.annotationDirection}
						customColor={person.annotationColor}
						noMark
						class="shrink-0 max-lg:before:hidden max-lg:after:hidden"
					>
						<Avatar class="size-14">
							<AvatarImage alt={`${person.name} avatar`} src={person.avatar} />
							<AvatarFallback class="text-xs font-medium">
								{person.initials}
							</AvatarFallback>
						</Avatar>
					</Annotation>

					<div class="min-w-0 flex-1">
						<h3 class="text-sm font-semibold text-foreground">{person.name}</h3>
						<p class="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
							{person.description}
						</p>
						<span
							class="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
						>
							{person.handle}
							<ArrowUpRight class="size-3.5" strokeWidth={1.5} aria-hidden="true" />
						</span>
					</div>
				</a>
			</article>
		{/each}
	</div>
</section>
