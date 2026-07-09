<script lang="ts" module>
	export type LightSwitchProps = {
		variant?: "outline" | "ghost";
		size?: ButtonSize;
	};
</script>

<script lang="ts">
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { mode, toggleMode } from "mode-watcher";
	import { Button, type ButtonSize } from "../button";

	let { variant = "outline", size = "icon-sm" }: LightSwitchProps = $props();
</script>

<Button onclick={toggleMode} {variant} {size}>
	{#if mode.current === "light"}
		<SunIcon class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
	{:else}
		<MoonIcon class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
