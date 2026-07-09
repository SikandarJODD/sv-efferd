<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Github, X as XLogo } from "$lib/svgs";
	import { landingNavLinks, landingSocialLinks } from "./config";
	import MobileNav from "./mobile-nav.svelte";
	import { ModeSwitch } from "../ui/mode-switch";
	import { getStars, GitHubButton } from "../ui/github-button";
	import { onMount } from "svelte";

	let stars = $state(30);
	const repo = { owner: "SikandarJODD", repo: "sv-efferd" };
	onMount(async () => {
		stars = await getStars({ ...repo, fallback: 60 });
	});
</script>

<header class="relative z-20 mx-auto max-w-7xl border-b border-border/80">
	<nav class="cpx flex h-14 items-center justify-between gap-3">
		<a aria-label="Efferd home" class="flex shrink-0 px-1" href="/">
			<!-- <Logo class="h-5 w-auto" /> -->
			<span class="font-mono font-medium tracking-tight">Svelte Efferd</span>
		</a>

		<div class="hidden flex-1 items-center justify-center md:flex">
			<div class="flex items-center gap-1">
				{#each landingNavLinks as link}
					<Button
						class="px-3 text-sm text-muted-foreground hover:text-foreground"
						href={link.href}
						size="sm"
						variant="ghost"
					>
						{link.label}
					</Button>
				{/each}
			</div>
		</div>

		<div class="hidden items-center gap-2 md:flex">
			{#each landingSocialLinks as link}
				<Button
					target="_blank"
					aria-label={link.label}
					href={link.href}
					size="icon-sm"
					variant="ghost"
				>
					{#if link.id === "x"}
						<XLogo class="size-4" />
					{/if}
				</Button>
			{/each}
			<GitHubButton variant='ghost' class='dark:bg-muted/50' repo={repo} stars={stars} />

			<ModeSwitch />
		</div>

		<div class="flex items-center gap-2 md:hidden">
			<ModeSwitch />
			<MobileNav />
		</div>
	</nav>
</header>
