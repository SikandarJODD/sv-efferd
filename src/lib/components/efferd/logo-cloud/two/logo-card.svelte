<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { WordmarkLogo } from "../wordmark-logos";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type LogoCardProps = HTMLAttributes<HTMLDivElement> & {
		logo: WordmarkLogo;
		class?: string;
		children?: Snippet;
	};

	let { logo, class: className = "", children, ...props }: LogoCardProps = $props();
</script>

<div
	class={cn("flex items-center justify-center bg-background px-4 py-8 md:p-8", className)}
	{...props}
>
	<img
		alt={logo.alt}
		class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
		height={logo.height}
		src={logo.src}
		width={logo.width}
	/>
	{@render children?.()}
</div>
