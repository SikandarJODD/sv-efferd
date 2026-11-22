<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="relative flex h-full flex-col overflow-hidden px-3 py-3 text-center sm:px-4 sm:py-4">
	<div
		class="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border/80 to-border/80"
	></div>
	<div
		class="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border/80 to-border/80"
	></div>
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/50 blur-2xl"
	></div>

	<div class="relative flex min-h-0 flex-1 flex-col items-center justify-center">
		<div class="mb-2 flex h-3 items-center gap-1 rounded-full border border-border/70 px-1.5">
			<div class="size-1 rounded-full bg-muted-foreground/25"></div>
			<div class="h-1 w-8 rounded-full bg-muted-foreground/14"></div>
		</div>

		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>

		<div class="mt-2.5 flex gap-1.5">
			<div
				class="h-4 w-12 rounded-sm bg-muted-foreground/20 transition-colors duration-200 group-hover:bg-muted-foreground/28"
			></div>
			<div class="h-4 w-12 rounded-sm border border-border/80 bg-background"></div>
		</div>

		<div class="mt-2 flex items-center gap-1.5">
			<div class="flex">
				<div
					class="size-2.5 rounded-full border border-background bg-muted-foreground/18"
				></div>
				<div
					class="-ml-0.5 size-2.5 rounded-full border border-background bg-muted-foreground/14"
				></div>
				<div
					class="-ml-0.5 size-2.5 rounded-full border border-background bg-muted-foreground/10"
				></div>
			</div>
			<div class="h-1 w-10 rounded-full bg-muted-foreground/12"></div>
		</div>
	</div>
</div>
