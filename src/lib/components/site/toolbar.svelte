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
	class="pointer-events-none fixed inset-x-2 top-2 z-50 flex items-start justify-between md:top-2.5 md:right-2.5 md:left-auto"
>
	<Sidebar.Trigger
		class="pointer-events-auto size-10 rounded-lg border border-border bg-background shadow-none md:hidden"
	/>

	<div
		class="pointer-events-auto ml-auto flex items-center gap-px rounded-full border border-border bg-background p-0.5"
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
			class="rounded-full px-2"
		/>
		<ModeSwitch variant="ghost" class="rounded-full" />
	</div>
</header>
