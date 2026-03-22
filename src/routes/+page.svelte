<script lang="ts">
	import SiteHero from "$lib/components/landing/site-hero.svelte";
</script>

<div class="relative flex min-h-screen flex-col">
	<!-- <SiteHeader /> -->
	<SiteHero />
	<section class="border-b border-border/80 px-4 py-20 text-center sm:px-6 lg:px-8" id="docs">
		<div class="mx-auto max-w-3xl">
			<p class="text-sm font-medium tracking-[0.24em] text-muted-foreground uppercase">
				Docs
			</p>
			<h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
				Documentation is coming soon
			</h2>
			<p class="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
				This placeholder section keeps the existing navigation target valid while the docs
				area is still being built.
			</p>
		</div>
	</section>
</div>
