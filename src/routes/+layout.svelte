<script lang="ts">
	import "./layout.css";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { PressedKeys } from "runed";
	import { Agentation } from "sv-agentation";

	let { children } = $props();

	const keys = new PressedKeys();
	keys.onKeys(["d"], () => {
		toggleMode();
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="application-name" content="Svelte Efferd" />
	<meta name="apple-mobile-web-app-title" content="Svelte Efferd" />
	<meta name="theme-color" content="#09090b" />
	<title>Svelte Efferd Blocks</title>
</svelte:head>

<Agentation outputMode="compact" />
<ModeWatcher defaultMode="dark" />
{@render children()}
