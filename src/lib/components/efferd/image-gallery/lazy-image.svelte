<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { cn } from '$lib/utils';
	import { useInView } from 'motion-sv';

	type LazyImageProps = {
		alt: string;
		src: string;
		class?: string;
		containerClassName?: string;
		fallback?: string;
		ratio: number;
		inView?: boolean;
	};

	let {
		alt,
		src,
		class: className,
		containerClassName,
		fallback,
		ratio,
		inView = false
	}: LazyImageProps = $props();

	let containerRef = $state<HTMLElement | null>(null);
	let imageRef = $state<HTMLImageElement | null>(null);
	let fallbackSource = $state<string | undefined>(undefined);
	let isLoading = $state(false);
	let lastSource: string | undefined = undefined;
	let revealStartFrame: number | null = null;
	let revealCommitFrame: number | null = null;

	let view = useInView(
		() => containerRef as HTMLElement,
		() => ({ once: true }) as any
	);

	let imageSource = $derived(fallbackSource ?? (inView ? (view.isInView ? src : undefined) : src));

	function handleError() {
		if (fallback && imageSource !== fallback) {
			fallbackSource = fallback;
			return;
		}

		cancelReveal();
		isLoading = false;
	}

	function handleLoad() {
		scheduleReveal();
	}

	function cancelReveal() {
		if (revealStartFrame !== null) {
			cancelAnimationFrame(revealStartFrame);
			revealStartFrame = null;
		}

		if (revealCommitFrame !== null) {
			cancelAnimationFrame(revealCommitFrame);
			revealCommitFrame = null;
		}
	}

	function scheduleReveal() {
		cancelReveal();

		// The image needs to be painted once at opacity-0 before we flip it to opacity-100.
		revealStartFrame = requestAnimationFrame(() => {
			revealStartFrame = null;
			revealCommitFrame = requestAnimationFrame(() => {
				revealCommitFrame = null;
				isLoading = false;
			});
		});
	}

	$effect(() => {
		src;
		fallback;
		fallbackSource = undefined;
	});

	$effect(() => {
		if (imageSource !== lastSource) {
			cancelReveal();
			lastSource = imageSource;
			isLoading = Boolean(imageSource);
		}
	});

	$effect(() => {
		if (!imageSource || !imageRef?.complete || !isLoading) {
			return;
		}

		scheduleReveal();
	});

	$effect(() => {
		return () => {
			cancelReveal();
		};
	});
</script>

<AspectRatio
	bind:ref={containerRef}
	class={cn('relative size-full overflow-hidden border bg-accent/30', containerClassName)}
	{ratio}
>
	{#if imageSource}
		<img
			bind:this={imageRef}
			{alt}
			class={cn(
				'size-full object-cover transition-opacity duration-500',
				isLoading ? 'opacity-0' : 'opacity-100',
				className
			)}
			decoding="async"
			fetchpriority={inView ? 'high' : 'low'}
			loading="lazy"
			onerror={handleError}
			onload={handleLoad}
			src={imageSource}
		/>
	{/if}
</AspectRatio>
