<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { Github, X as XLogo } from "#lib/svgs/index.js";
	import { landingSocialLinks } from "./config";
	import MobileNav from "./mobile-nav.svelte";
	import { ModeSwitch } from "../ui/mode-switch";
	import { getStars, GitHubButton } from "../ui/github-button";
	import { onMount } from "svelte";
	import ImportAliasToggle from "../base/import-alias/ImportAliasToggle.svelte";
	import { importAliasStyle } from "../base/import-alias/import-alias.svelte.js";
	import DesktopNav from "./desktop-nav.svelte";

	let stars = $state(30);
	const repo = { owner: "SikandarJODD", repo: "sv-efferd" };
	onMount(async () => {
		stars = await getStars({ ...repo, fallback: 60 });
	});
</script>

<header
	class="sticky top-0 z-[60] mx-auto max-w-7xl border-b border-border/80 bg-background/95 backdrop-blur-sm"
>
	<nav class="cpx flex h-12 items-center justify-between gap-3">
		<a aria-label="Efferd home" class="flex shrink-0 px-1" href="/">
			<!-- <Logo class="h-5 w-auto" /> -->
			<span class="font-mono font-medium tracking-tight">Svelte Efferd</span>
		</a>

		<div class="hidden flex-1 items-center justify-center md:flex">
			<DesktopNav />
		</div>

		<div class="hidden items-center gap-2 md:flex">
			<ImportAliasToggle bind:value={importAliasStyle.current} />
			{#each landingSocialLinks as link}
				<Button
					target="_blank"
					aria-label={link.label}
					href={link.href}
					size="icon-sm"
					variant="ghost"
				>
					{#if link.id === "x"}
						<XLogo class="size-3.5" />
					{/if}
				</Button>
			{/each}
			<GitHubButton variant="ghost" class="dark:bg-muted/50" {repo} {stars} />

			<ModeSwitch />
		</div>

		<div class="flex items-center gap-2 md:hidden">
			<ImportAliasToggle bind:value={importAliasStyle.current} />
			<ModeSwitch variant="ghost" />
			<MobileNav />
		</div>
	</nav>
</header>
