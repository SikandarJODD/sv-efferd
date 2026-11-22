<script lang="ts">
	import { Marquee } from "#lib/components/magic/marquee/index.js";
	import { ProgressiveBlur } from "#lib/components/ui/progressive-blur/index.js";
	import { wordmarkLogos as logos } from "../wordmark-logos";
</script>

<div
	class="relative border-x border-y bg-linear-to-r from-secondary/50 via-transparent to-secondary/50 py-6"
>
	<Marquee class="flex items-center gap-20" style="--duration: 30s; --gap: 2rem;">
		{#each logos as logo}
			<img
				alt={logo.alt}
				class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
				height={logo.height}
				loading="lazy"
				src={logo.src}
				width={logo.width}
			/>
		{/each}
	</Marquee>

	<ProgressiveBlur
		blurIntensity={1}
		class="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[160px]"
		direction="left"
	/>
	<ProgressiveBlur
		blurIntensity={1}
		class="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[160px]"
		direction="right"
	/>
</div>
