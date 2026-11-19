<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col gap-2 overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
	<div>
		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="grid min-h-0 flex-1 grid-cols-2 gap-2">
		<div class="overflow-hidden rounded-sm border border-border/80 bg-background shadow-xs">
			<div class="relative flex h-9 items-end overflow-hidden bg-muted/40 p-1.5">
				<div class="absolute -top-3 -right-2 size-10 rounded-full border border-muted-foreground/10"></div>
				<div class="h-1.5 w-8 rounded-full bg-muted-foreground/16"></div>
			</div>
			<div class="flex flex-col gap-1 border-t border-border/70 px-1.5 py-1.5">
				<div class="flex items-center justify-between">
					<div class="h-1 w-6 rounded-full bg-muted-foreground/14"></div>
					<div class="h-1 w-3 rounded-full bg-muted-foreground/10"></div>
				</div>
				<div class="h-1.5 w-4/5 rounded-full bg-muted-foreground/20"></div>
				<div class="h-1 w-3/5 rounded-full bg-muted-foreground/11"></div>
			</div>
		</div>

		<div class="overflow-hidden rounded-sm border border-border/80 bg-background">
			<div class="relative flex h-9 items-end overflow-hidden bg-muted/25 p-1.5">
				<div class="absolute top-1.5 left-1/2 h-6 w-9 -translate-x-1/2 rounded-t-sm border border-b-0 border-muted-foreground/12"></div>
				<div class="h-1.5 w-7 rounded-full bg-muted-foreground/14"></div>
			</div>
			<div class="flex flex-col gap-1 border-t border-border/70 px-1.5 py-1.5">
				<div class="flex items-center justify-between">
					<div class="h-1 w-5 rounded-full bg-muted-foreground/14"></div>
					<div class="h-1 w-3 rounded-full bg-muted-foreground/10"></div>
				</div>
				<div class="h-1.5 w-3/4 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1 w-2/3 rounded-full bg-muted-foreground/11"></div>
			</div>
		</div>
	</div>
</div>
