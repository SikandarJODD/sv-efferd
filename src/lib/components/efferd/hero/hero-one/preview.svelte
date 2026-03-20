<script lang="ts">
	import HeaderOne from '$lib/components/efferd/header/header-one/header-one.svelte';
	import Hero from './hero.svelte';
	import LogoSection from './logo-section.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<HeaderOne />
	<main class="grow">
		<Hero />
		<LogoSection />
	</main>
</div>
