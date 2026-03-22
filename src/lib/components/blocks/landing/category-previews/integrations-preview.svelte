<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="grid h-full grid-cols-2 place-content-center px-3 py-3 sm:px-4 sm:py-4">
	<div class="flex items-center">
		<div>
			<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">
				{title}
			</h3>
			<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
		</div>
	</div>
	<div class="relative mx-auto size-20">
		<div
			class="absolute inset-0 z-20 m-auto size-7 rounded-full border border-border bg-card"
		></div>
		<div
			class="absolute top-0 left-0 z-20 size-4 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="absolute top-0 right-0 z-20 size-4 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="absolute bottom-0 left-0 z-20 size-4 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="absolute right-0 bottom-0 z-20 size-4 rounded-md border border-muted-foreground/20 bg-muted"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-border/80"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-border/80"
		></div>
	</div>
</div>
