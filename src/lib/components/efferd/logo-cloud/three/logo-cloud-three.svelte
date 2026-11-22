<script lang="ts">
	import { Marquee } from "#lib/components/magic/marquee/index.js";
	import { wordmarkLogos as logos } from "../wordmark-logos";
</script>

<div class="overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)] py-4">
	<Marquee>
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
</div>
