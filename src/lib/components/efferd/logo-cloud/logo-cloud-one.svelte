<script lang="ts">
	import { wordmarkLogos as logos } from "./wordmark-logos";
</script>

<div class="grid grid-cols-2 rounded-lg bg-border shadow md:grid-cols-4">
	{#each logos as logo, i}
		<div class="flex items-center justify-center rounded-lg border bg-background p-8">
			<img
				alt={logo.alt}
				class="pointer-events-none block h-4 select-none md:h-5 dark:brightness-0 dark:invert"
				height={logo.height}
				loading="lazy"
				src={logo.src}
				width={logo.width}
			/>
		</div>
	{/each}
</div>
