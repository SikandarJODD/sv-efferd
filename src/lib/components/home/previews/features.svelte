<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col justify-center gap-2.5 overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
	<div class="text-center">
		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>
	</div>

	<div class="grid flex-1 grid-cols-3 items-end gap-1.5 mask-b-from-90%">
		<div class="flex h-16 flex-col items-center justify-center gap-1.5 rounded-sm border bg-background p-1.5">
			<div class="flex size-5 items-center justify-center rounded-sm bg-muted/60">
				<div class="size-2 rounded-full border border-muted-foreground/25"></div>
			</div>
			<div class="h-1.5 w-5 rounded-full bg-muted-foreground/18"></div>
			<div class="h-1 w-8 rounded-full bg-muted-foreground/11"></div>
		</div>

		<div
			class="mb-1 flex h-17 flex-col items-center justify-center gap-1.5 rounded-sm border border-muted-foreground/20 bg-background p-1.5 shadow-xs transition-colors duration-200 group-hover:border-muted-foreground/30"
		>
			<div class="flex size-5 items-end justify-center gap-0.5 rounded-sm bg-muted/60 p-1">
				<div class="h-1.5 w-0.5 rounded-full bg-muted-foreground/18"></div>
				<div class="h-2.5 w-0.5 rounded-full bg-muted-foreground/28"></div>
				<div class="h-2 w-0.5 rounded-full bg-muted-foreground/22"></div>
			</div>
			<div class="h-1.5 w-6 rounded-full bg-muted-foreground/20"></div>
			<div class="h-1 w-9 rounded-full bg-muted-foreground/12"></div>
		</div>

		<div class="flex h-16 flex-col items-center justify-center gap-1.5 rounded-sm border bg-background p-1.5">
			<div class="flex size-5 items-center justify-center rounded-sm bg-muted/60">
				<div class="size-2 border border-muted-foreground/25"></div>
			</div>
			<div class="h-1.5 w-5 rounded-full bg-muted-foreground/18"></div>
			<div class="h-1 w-8 rounded-full bg-muted-foreground/11"></div>
		</div>
	</div>
</div>
