<script lang="ts">
	import { AspectRatio } from "$lib/components/ui/aspect-ratio";
	import { cn } from "$lib/utils";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	type BlogCard = {
		title: string;
		href: string;
		description: string;
		author: string;
		createdAt: string;
		readTime: string;
		image: string;
	};

	type Props = BlogCard & HTMLAnchorAttributes;

	const fallbackImage = "https://placehold.co/640x360?text=fallback-image";

	let {
		title,
		href,
		description,
		author,
		createdAt,
		readTime,
		image,
		class: className = "",
		...props
	}: Props = $props();

	let imageSrc = $state("");

	$effect(() => {
		imageSrc = image;
	});

	function handleImageError() {
		if (imageSrc !== fallbackImage) {
			imageSrc = fallbackImage;
		}
	}
</script>

<a
	{href}
	class={cn(
		"group flex flex-col gap-2 rounded-xl p-3 transition-colors hover:bg-muted/50 active:bg-muted",
		className
	)}
	{...props}
>
	<AspectRatio
		ratio={16 / 9}
		class="overflow-hidden rounded-xl shadow-md outline outline-offset-3 outline-border/50"
	>
		<img
			src={imageSrc}
			alt={title}
			loading="lazy"
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			onerror={handleImageError}
		/>
	</AspectRatio>

	<div class="space-y-2 px-2 pb-2">
		<div
			class="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground transition-colors group-hover:text-foreground sm:text-xs"
		>
			<p>by {author}</p>
			<div class="size-1 rounded-full bg-current"></div>
			<p>{createdAt}</p>
			<div class="size-1 rounded-full bg-current"></div>
			<p>{readTime}</p>
		</div>

		<h2 class="line-clamp-2 text-lg font-semibold">{title}</h2>
		<p
			class="line-clamp-3 text-sm text-muted-foreground transition-colors group-active:text-foreground"
		>
			{description}
		</p>
	</div>
</a>
