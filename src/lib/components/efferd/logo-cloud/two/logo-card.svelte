<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Logo = {
		src: string;
		alt: string;
	};
	type LogoCardProps = HTMLAttributes<HTMLDivElement> & {
		logo: Logo;
		class?: string;
		children?: Snippet;
	};

	let { logo, class: className = '', children, ...props }: LogoCardProps = $props();
</script>

<div
	class={cn('flex items-center justify-center bg-background px-4 py-8 md:p-8', className)}
	{...props}
>
	<img
		alt={logo.alt}
		class="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
		height="auto"
		src={logo.src}
		width="auto"
	/>
	{@render children?.()}
</div>
