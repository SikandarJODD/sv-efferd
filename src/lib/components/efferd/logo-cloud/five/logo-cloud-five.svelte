<script lang="ts">
	import { extendedWordmarkLogos as logos } from "../wordmark-logos";
</script>

<div
	class="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-8 py-6 sm:gap-x-12 sm:gap-y-12"
>
	{#each logos as logo}
		<img
			alt={logo.alt}
			class="pointer-events-none h-5 w-fit select-none dark:brightness-0 dark:invert"
			height={logo.height}
			loading="lazy"
			src={logo.src}
			width={logo.width}
		/>
	{/each}
</div>
