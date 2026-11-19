<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="relative flex h-full flex-col gap-2.5 overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
	<div
		class="pointer-events-none absolute top-2 left-1/2 size-20 -translate-x-1/2 rounded-full bg-amber-300/0 blur-2xl transition-colors duration-200 group-hover:bg-amber-300/20"
	></div>

	<div class="relative min-h-16 flex-1">
		<div
			class="absolute inset-x-3 top-0 rounded-md border border-border/60 bg-muted/30 px-2 py-1.5 opacity-70 transition-colors duration-200 group-hover:border-amber-400/25 group-hover:bg-amber-200/15"
		>
			<div class="flex items-center justify-between gap-2">
				<div class="flex items-center gap-1.5">
					<div class="size-2.5 rounded-full bg-muted-foreground/18"></div>
					<div class="h-1 w-7 rounded-full bg-muted-foreground/14"></div>
				</div>
				<div class="flex gap-1">
					<div class="h-1 w-5 rounded-full bg-muted-foreground/12"></div>
					<div class="h-1 w-5 rounded-full bg-muted-foreground/12"></div>
				</div>
			</div>
		</div>

		<div
			class="absolute inset-x-0 top-5 rounded-md border border-border/80 bg-card/95 px-2 py-2 shadow-xs transition-[border-color,box-shadow] duration-200 group-hover:border-emerald-400/25 group-hover:shadow-sm"
		>
			<div class="flex items-center justify-between gap-2">
				<div class="flex items-center gap-1.5">
					<div
						class="size-3 rounded-full bg-amber-300/25 transition-colors duration-200 group-hover:bg-amber-400/40"
					></div>
					<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
				</div>
				<div class="flex items-center gap-1">
					<div class="h-3 w-6 rounded-sm"></div>
					<div
						class="h-3 w-7 rounded-sm bg-emerald-300/10 transition-colors duration-200 group-hover:bg-emerald-400/20"
					></div>
					<div class="h-3 w-6 rounded-sm"></div>
				</div>
				<div
					class="h-4 w-10 rounded-sm bg-amber-300/20 transition-colors duration-200 group-hover:bg-amber-400/35"
				></div>
			</div>
		</div>
	</div>

	<div class="mt-auto text-center">
		<p class="text-xs leading-4 text-muted-foreground">{countLabel}</p>
		<h3 class="font-heading mt-0.5 text-base font-normal text-foreground">
			{title}
		</h3>
	</div>
</div>
