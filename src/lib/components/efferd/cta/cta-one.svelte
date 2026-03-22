<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
</script>

<div class="relative mx-auto flex w-full max-w-3xl flex-col justify-between border-x md:flex-row">
	<FullWidthDivider position="top" />

	<div class="border-b p-4 md:border-b-0">
		<h2 class="text-center text-lg font-bold md:text-left md:text-2xl">
			Let your plans shape the future.
		</h2>
	</div>

	<div class="flex items-center justify-center gap-2 p-4 md:border-l">
		<Button variant="secondary">Contact Sales</Button>
		<Button>Get Started</Button>
	</div>

	<FullWidthDivider position="bottom" />
</div>
