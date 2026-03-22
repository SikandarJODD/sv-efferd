<script lang="ts">
	import { ArrowRightIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { FullWidthDivider } from '$lib/components/ui/full-width-divider';
</script>

<div class="relative mx-auto flex w-full max-w-3xl flex-col justify-between border-x">
	<FullWidthDivider position="top" />

	<div class="border-b px-2 py-8">
		<h2 class="text-center text-lg font-semibold md:text-2xl">
			Plan the present. Build the future.
		</h2>
		<p class="text-balance text-center text-sm text-muted-foreground md:text-base">
			Start your journey today by clicking the button below.
		</p>
	</div>

	<div class="flex items-center justify-center gap-2 bg-secondary/80 p-4 dark:bg-secondary/40">
		<Button variant="outline">Contact Sales</Button>
		<Button>
			Get Started
			<ArrowRightIcon data-icon="inline-end" />
		</Button>
	</div>

	<FullWidthDivider position="bottom" />
</div>
