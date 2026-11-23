<script lang="ts">
	let { children } = $props();

	function preventDemoNavigation(event: MouseEvent) {
		const target = event.target;

		if (target instanceof Element && target.closest("a")) {
			event.preventDefault();
		}
	}
</script>

<svelte:window onclickcapture={preventDemoNavigation} />

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-background">
	{@render children()}
</div>
