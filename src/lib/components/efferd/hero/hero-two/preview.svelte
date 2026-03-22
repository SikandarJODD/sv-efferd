<script lang="ts">
	import HeaderTwo from "$lib/components/efferd/header/header-two/header-two.svelte";
	import Hero from "./hero.svelte";
	import LogoSection from "./logo-section.svelte";
</script>

<div
	class="relative flex min-h-screen flex-col overflow-hidden px-4 supports-[overflow:clip]:overflow-clip"
>
	<HeaderTwo />
	<main
		class="relative mx-auto max-w-4xl grow before:absolute before:-inset-y-14 before:-left-px before:w-px before:bg-border after:absolute after:-inset-y-14 after:-right-px after:w-px after:bg-border"
	>
		<Hero />
		<LogoSection />
	</main>
</div>
