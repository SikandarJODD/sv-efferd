<script lang="ts">
	import HeaderThree from "$lib/components/efferd/header/header-three/header-three.svelte";
	import Hero from "./hero.svelte";
	import LogoSection from "./logo-section.svelte";
</script>

<div class="flex min-h-screen flex-col">
	<HeaderThree />
	<main class="grow">
		<Hero />
		<LogoSection />
	</main>
</div>
