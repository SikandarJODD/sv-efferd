<script lang="ts">
	import { onMount } from "svelte";
	import ImportAliasToggle from "../import-alias/toggle.svelte";
	import { importAliasStyle } from "../import-alias/preference.svelte.js";
	import { getStars, GitHubButton } from "../ui/github-button";
	import { ModeSwitch } from "../ui/mode-switch";
	import * as Sidebar from "../ui/sidebar/index.js";

	let stars = $state(30);
	const repo = { owner: "SikandarJODD", repo: "sv-efferd" };

	onMount(async () => {
		stars = await getStars({ ...repo, fallback: 60 });
	});
</script>

<header
	class="pointer-events-none sticky top-0 z-50 flex h-14 items-center justify-between px-2 md:h-12"
>
	<Sidebar.Trigger
		class="pointer-events-auto size-10 rounded-[calc(var(--radius)+2px)] border border-border bg-background shadow-none md:hidden"
	/>

	<div
		class="pointer-events-auto ml-auto flex items-center gap-0.5 rounded-full border border-border bg-background p-1"
	>
		<ImportAliasToggle bind:value={importAliasStyle.current} />
		<GitHubButton
			{repo}
			{stars}
			starsTweenedDuration={200}
			target="_blank"
			rel="noreferrer"
			variant="ghost"
			size="sm"
			class="rounded-full px-2 max-md:h-10"
		/>
		<ModeSwitch variant="ghost" class="rounded-full max-md:size-10" />
	</div>
</header>
