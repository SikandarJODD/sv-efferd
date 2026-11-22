<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { FullWidthDivider } from "#lib/components/ui/full-width-divider/index.js";
	import { Github, X as XLogo } from "#lib/components/svgs/index.js";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { mode, toggleMode } from "mode-watcher";

	type FooterLink = {
		label: string;
		href: string;
		external?: boolean;
	};

	const productLinks: FooterLink[] = [
		{ label: "Home", href: "/" },
		{ label: "Blocks", href: "/blocks/hero" },
		{ label: "llms.txt", href: "/llms.txt" },
		{ label: "Component manifest", href: "/component-manifest.json" }
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

<footer class="relative">
	<FullWidthDivider position="top" class="bg-border/80" />
	<div class="container">
		<div class="relative border-x border-border/80">
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
						<div class="-mt-5.5 grow overflow-hidden">
							<svg
								aria-hidden="true"
								class="ml-22 w-16 -rotate-2"
								height="22"
								viewBox="0 0 283 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332"
									stroke="url(#paint0_linear_pl)"
									stroke-width="4"
								></path>
								<defs>
									<linearGradient
										id="paint0_linear_pl"
										x1="282"
										y1="5.49999"
										x2="40"
										y2="13"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fc6203"></stop>
										<stop offset="1" stop-color="#fc037f"></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<p class="max-w-sm text-sm text-muted-foreground">
							Open-source blocks for Svelte.
						</p>
					</div>

					<div class="flex flex-wrap items-center gap-2">
						<Button
							aria-label={mode.current === "dark"
								? "Switch to light mode"
								: "Switch to dark mode"}
							class="rounded-full shadow-none"
							onclick={toggleMode}
							variant="outline"
							size="icon-sm"
						>
							{#if mode.current === "dark"}
								<SunIcon class="size-4" />
							{:else}
								<MoonIcon class="size-4" />
							{/if}
						</Button>

						{#each socialLinks as social (social.id)}
							<Button
								aria-label={social.label}
								class="rounded-full shadow-none"
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
					<h2 class="text-xs font-semibold text-muted-foreground uppercase">Explore</h2>

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
			</div>
		</div>
	</div>
	<div class="relative container">
		<FullWidthDivider position="top" class="bg-border/80" />
		<div class="relative border-x">
			<p
				class="flex items-center justify-center py-3 text-center text-xs text-muted-foreground sm:text-xs"
			>
				&copy; {currentYear} Svelte Efferd. Built by
				<a
					class="ml-2 inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-muted-foreground"
					href="https://bhide.dev?utm_source=svelte-efferd"
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
