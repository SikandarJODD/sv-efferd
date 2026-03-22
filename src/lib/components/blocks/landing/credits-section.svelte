<script lang="ts">
	import { StripedPattern } from "$lib/components/magic/striped-pattern";
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { X as XLogo } from "$lib/svgs";
	import { cn } from "$lib/utils";

	const credits = [
		{
			role: "Original creator",
			name: "Shaban",
			description: "Designed the original version that inspired this Svelte adaptation.",
			href: "https://x.com/shabanhr",
			handle: "@shabanhr",
			avatar: "https://avatars.githubusercontent.com/u/179793504?v=4",
			initials: "S"
		},
		{
			role: "Svelte port by",
			name: "Bhide Svelte",
			description: "Ported the idea and experience into Svelte for this project.",
			href: "https://x.com/Sikandar_Bhide",
			handle: "@Sikandar_Bhide",
			avatar: "https://avatars.githubusercontent.com/u/93428946?v=4",
			initials: "BS"
		}
	] as const;
</script>

<section
	class="relative border-t border-dashed border-muted-foreground/40 px-4 pt-8 sm:px-6 sm:pt-16 lg:px-8"
	aria-labelledby="credits-title"
>
	<!-- <DecorIcon position="top-left" class='size-3.5 stroke-muted-foreground/40 bg-background'></DecorIcon> -->
	<DecorIcon class="z-40 size-3.5 bg-background stroke-muted-foreground/80" position="top-left" />
	<DecorIcon
		class="z-50 size-3.5 bg-background stroke-muted-foreground/80"
		position="top-right"
	/>
	<div class="mx-auto max-w-7xl">
		<div
			class="relative overflow-hidden border border-dashed border-border bg-background backdrop-blur-sm"
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

			<DecorIcon
				class="size-3.5 bg-background stroke-muted-foreground/70"
				position="top-left"
			/>
			<DecorIcon
				class="size-3.5 bg-background stroke-muted-foreground/70"
				position="top-right"
			/>
			<DecorIcon
				class="size-3.5 bg-background stroke-muted-foreground/70"
				position="bottom-left"
			/>
			<DecorIcon
				class="size-3.5 bg-background stroke-muted-foreground/70"
				position="bottom-right"
			/>

			<div class="relative border-b border-dashed border-border/80 px-4 py-4 sm:px-5">
				<p
					class="text-[10px] font-medium tracking-[0.24em] text-muted-foreground uppercase"
				>
					Credits
				</p>
				<h2
					id="credits-title"
					class="mt-1 text-lg font-semibold tracking-tight text-foreground"
				>
					Built on great original work
				</h2>
				<p class="mt-1 max-w-2xl text-[11px] leading-5 text-muted-foreground">
					Original concept by Shaban, carefully ported to Svelte by Bhide Svelte.
				</p>
			</div>

			<div class="relative grid gap-3 p-4 sm:p-5 lg:grid-cols-2">
				{#each credits as person, i}
					<a
						class={cn(
							"group relative flex h-full flex-col justify-between gap-4 border border-dashed border-border/80 bg-background/80 p-4 transition-colors hover:border-muted-foreground/40",
							i === 0 &&
								"border-muted-foreground/40 bg-linear-60 from-secondary/30 to-transparent hover:border-primary/40",
							i === 1 && "bg-linear-to-bl from-secondary/30 to-transparent"
						)}
						href={person.href}
						rel="noreferrer"
						target="_blank"
					>
						<div class="flex items-start gap-3">
							<Avatar class="size-14 border border-dashed border-border/80">
								<AvatarImage alt={`${person.name} avatar`} src={person.avatar} />
								<AvatarFallback class="text-[11px] font-medium">
									{person.initials}
								</AvatarFallback>
							</Avatar>

							<div class="min-w-0">
								<p
									class="text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
								>
									{person.role}
								</p>
								<h3 class="mt-1 text-sm font-semibold text-foreground">
									{person.name}
								</h3>
								<p class="mt-1 text-[11px] leading-5 text-muted-foreground">
									{person.description}
								</p>
							</div>
						</div>

						<div
							class="flex items-center justify-between border-t border-dashed border-border/80 pt-3 text-[11px] text-muted-foreground"
						>
							<span>{person.handle}</span>
							<span
								class="inline-flex items-center gap-1.5 transition-colors group-hover:text-foreground"
							>
								<XLogo class="size-3.5" />
								View profile
							</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
