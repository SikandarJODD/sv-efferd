<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { Github, X as XLogo } from "$lib/svgs";
	import { MoonIcon, SunIcon } from "@lucide/svelte";
	import { mode, toggleMode } from "mode-watcher";
	import { StripedPattern } from "../magic/striped-pattern";

	type FooterLink = {
		label: string;
		href: string;
		external?: boolean;
	};

	const productLinks: FooterLink[] = [
		{ label: "Home", href: "/" },
		{ label: "Blocks", href: "/blocks" },
		{ label: "Changelog", href: "/changelog" }
	];

	const resourceLinks: FooterLink[] = [
		{ label: "Docs", href: "/docs" },
		{ label: "GitHub", href: "https://github.com/SikandarJODD/sv-efferd", external: true },
		{ label: "X / Twitter", href: "https://x.com/Sikandar_Bhide", external: true }
	];

	const socialLinks = [
		{
			id: "x",
			label: "X",
			href: "https://x.com/Sikandar_Bhide"
		},
		{
			id: "github",
			label: "GitHub",
			href: "https://github.com/SikandarJODD/sv-efferd"
		}
	] as const;

	const currentYear = new Date().getFullYear();
</script>

<div class="pt-18">
	<!-- <div class="relative h-18 bg-neutral-50">
		<StripedPattern
			class="mask-[radial-gradient(circle_at_center,black,transparent_55%)] max-w-7xl mx-auto text-muted-foreground/30"
			direction="right"
		/>
	</div> -->
	<footer class="relative">
		<FullWidthDivider position="top" class="bg-border/80" />
		<div class="container">
			<div class="relative border-x border-border/80">
				<DecorIcon class="size-3.5 bg-background opacity-80" position="top-left" />
				<DecorIcon class="size-3.5 bg-background opacity-80" position="top-right" />
				<DecorIcon
					class="size-3.5 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] bg-background opacity-80"
					position="bottom-left"
				/>
				<DecorIcon
					class="size-3.5 translate-y-[calc(50%-0.5px)] bg-background opacity-80"
					position="bottom-right"
				/>

				<div class="cpx grid gap-10 py-12 lg:grid-cols-5">
					<div class="col-span-4 flex flex-col gap-6">
						<div class="space-y-3">
							<a
								aria-label="Svelte Efferd home"
								class="inline-flex w-fit rounded-md font-mono text-xl font-semibold tracking-tight transition-colors hover:text-foreground/80"
								href="/"
							>
								Svelte Efferd
							</a>
							<p class="max-w-sm text-sm text-muted-foreground">
								Less effort. More effect.
							</p>
						</div>

						<div class="flex flex-wrap items-center gap-2">
							<Button onclick={toggleMode} variant="outline" size="icon-sm">
								{#if mode.current === "dark"}
									<SunIcon class="size-4" />
								{:else}
									<MoonIcon class="size-4" />
								{/if}
							</Button>

							{#each socialLinks as social (social.id)}
								<Button
									aria-label={social.label}
									href={social.href}
									rel="noreferrer"
									size="icon-sm"
									target="_blank"
									variant="ghost"
								>
									{#if social.id === "x"}
										<XLogo class="size-4" />
									{:else}
										<Github class="size-4" />
									{/if}
								</Button>
							{/each}
						</div>
					</div>

					<div class="space-y-4">
						<h2
							class="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase"
						>
							Product
						</h2>

						<nav class="flex flex-col gap-3">
							{#each productLinks as link (link.label)}
								<a
									class="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
									href={link.href}
								>
									{link.label}
								</a>
							{/each}
						</nav>
					</div>

					<!-- <div class="space-y-4">
					<h2
					class="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase"
					>
					Resources
					</h2>

					<nav class="flex flex-col gap-3">
						{#each resourceLinks as link (link.label)}
						<a
						class="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
						href={link.href}
						rel={link.external ? "noreferrer" : undefined}
						target={link.external ? "_blank" : undefined}
						>
						{link.label}
						</a>
						{/each}
						</nav>
						</div> -->
				</div>
			</div>
		</div>
		<div class="relative container">
			<FullWidthDivider position="top" class="bg-border/80" />
			<div class="relative border-x">
				<!-- <FullWidthDivider position="top" class="bg-border/80" /> -->

				<p
					class="flex items-center justify-center py-3 text-center text-xs text-muted-foreground sm:text-xs"
				>
					&copy; {currentYear} Svelte Efferd. Built by
					<a
						class="ml-2 inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-muted-foreground"
						href="https://x.com/Sikandar_Bhide"
						rel="noreferrer"
						target="_blank"
					>
						<img
							alt="Bhide Svelte avatar"
							class="size-5 rounded-full border border-border/80 object-cover"
							height="20"
							src="https://avatars.githubusercontent.com/u/93428946?v=4"
							width="20"
						/>
						Bhide Svelte
					</a>
				</p>
			</div>
		</div>
	</footer>
</div>
