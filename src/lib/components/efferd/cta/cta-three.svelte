<script lang="ts">
	import { ArrowRightIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
</script>

<div
	class="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 border-y px-4 py-8 dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]"
>
	<DecorIcon class="size-4" position="top-left" />
	<DecorIcon class="size-4" position="top-right" />
	<DecorIcon class="size-4" position="bottom-left" />
	<DecorIcon class="size-4" position="bottom-right" />

	<div class="pointer-events-none absolute -inset-y-6 -left-px w-px border-l"></div>
	<div class="pointer-events-none absolute -inset-y-6 -right-px w-px border-r"></div>

	<div class="absolute top-0 left-1/2 -z-10 h-full border-l border-dashed"></div>

	<h2 class="text-center text-xl font-semibold md:text-3xl">Start for Free Today!</h2>
	<p class="text-center text-sm font-medium text-balance text-muted-foreground md:text-base">
		Begin your 6-day free trial today to fully explore and experience all the features and
		benefits we offer.
	</p>

	<div class="flex items-center justify-center gap-2">
		<Button variant="outline">Contact Sales</Button>
		<Button>
			Get Started
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>
</div>
