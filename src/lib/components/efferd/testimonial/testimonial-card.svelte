<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { cn } from "$lib/utils";
	import { QuoteIcon } from "@lucide/svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Testimonial = {
		quote: string;
		name: string;
		role: string;
		company: string;
		image: string;
	};

	type Props = HTMLAttributes<HTMLElement> & {
		testimonial: Testimonial;
		class?: string;
		index?: number;
	};

	let { testimonial, class: className = "", index = 0, ...props }: Props = $props();
</script>

<figure
	class={cn(
		"relative flex flex-col justify-between gap-6 px-8 pt-8 pb-6 shadow-xs md:translate-y-[calc(3rem*var(--t-card-index))]",
		"dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]",
		className
	)}
	style={`--t-card-index: ${index}`}
	{...props}
>
	<div class="absolute -inset-y-4 -left-px w-px bg-border"></div>
	<div class="absolute -inset-y-4 -right-px w-px bg-border"></div>
	<div class="absolute -inset-x-4 -top-px h-px bg-border"></div>
	<div class="absolute -right-4 -bottom-px -left-4 h-px bg-border"></div>
	<DecorIcon class="size-3.5" position="top-left" />

	<blockquote class="flex gap-4">
		<QuoteIcon aria-hidden="true" class="size-6 shrink-0 stroke-1" />

		<p class="flex-1 text-base leading-relaxed font-normal text-muted-foreground">
			{testimonial.quote}
		</p>
	</blockquote>

	<figcaption class="flex items-center gap-3">
		<Avatar
			class="size-10 rounded-full ring-2 ring-border ring-offset-2 ring-offset-background transition-shadow group-hover:ring-foreground/20"
		>
			<AvatarImage alt={`${testimonial.name}'s profile picture`} src={testimonial.image} />
			<AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
		</Avatar>
		<div class="flex flex-col">
			<cite class="text-sm font-medium text-foreground not-italic">
				{testimonial.name}
			</cite>
			<p class="text-xs text-muted-foreground">
				{testimonial.role}, <span class="text-foreground/80">{testimonial.company}</span>
			</p>
		</div>
	</figcaption>
</figure>
