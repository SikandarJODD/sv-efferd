<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { GridPattern } from "$lib/components/ui/grid-pattern";
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	type Testimonial = {
		name: string;
		role: string;
		image: string;
		company?: string;
		quote: string;
	};

	type Props = HTMLAttributes<HTMLElement> & {
		testimonial: Testimonial;
		class?: string;
	};
	let { testimonial, class: className = "", ...props }: Props = $props();
</script>

<div
	class={cn(
		"relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden bg-background p-4",
		className
	)}
	{...props}
>
	<div
		class="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full mask-[radial-gradient(farthest-side_at_top,white,transparent)]"
	>
		<GridPattern
			class="absolute inset-0 size-full stroke-border"
			height={25}
			width={25}
			x={-12}
			y={4}
		/>
	</div>

	<Avatar class="size-8 rounded-full">
		<AvatarImage alt={`${testimonial.name}'s profile picture`} src={testimonial.image} />
		<AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
	</Avatar>
	<figure>
		<figcaption class="-mt-0.5 -space-y-0.5">
			<cite class="text-sm not-italic md:text-base">{testimonial.name}</cite>
			<span class="block text-[11px] font-light tracking-tight text-muted-foreground">
				{testimonial.role}
				{testimonial.company && `, ${testimonial.company}`}
			</span>
		</figcaption>
		<blockquote class="mt-3">
			<p class="text-sm tracking-wide text-foreground/80">{testimonial.quote}</p>
		</blockquote>
	</figure>
</div>
