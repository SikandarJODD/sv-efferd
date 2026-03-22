<script lang="ts">
	import { ArrowRightIcon, CreditCardIcon } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<div
	class="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 rounded-4xl border bg-card px-4 py-8 shadow-sm md:py-10 dark:bg-card/50"
>
	<div class="space-y-2">
		<h2 class="text-center text-lg font-semibold tracking-tight md:text-2xl">
			Let your plans shape the future.
		</h2>
		<p class="text-center text-sm text-balance text-muted-foreground md:text-base">
			Start your free trial today. No credit card
			<CreditCardIcon class="inline-block size-4" />
			required.
		</p>
	</div>

	<div class="flex items-center justify-center gap-2">
		<Button class="shadow" variant="secondary">Contact Sales</Button>
		<Button class="shadow">
			Get Started
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>
</div>
