<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="grid h-full grid-cols-2 overflow-hidden">
	<div class="flex flex-col border-r px-3 py-3 sm:px-4 sm:py-4">
		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>
		<div class="mt-auto flex size-6 items-center justify-center rounded-full border border-border/70 bg-muted/30">
			<div class="h-2.5 w-1.5 rounded-full border border-muted-foreground/20"></div>
		</div>
	</div>
	<div class="flex items-center bg-muted/15 px-2 py-3">
		<div class="w-full overflow-hidden rounded-sm border border-border/80 bg-background shadow-xs">
			<div class="flex h-6 items-center justify-between border-b border-border/70 px-2">
				<div class="h-1.5 w-3/5 rounded-full bg-muted-foreground/18"></div>
				<div class="size-2 rounded-full border border-muted-foreground/18"></div>
			</div>
			<div class="flex h-6 items-center justify-between border-b border-border/70 px-2">
				<div class="h-1.5 w-1/2 rounded-full bg-muted-foreground/18"></div>
				<div class="size-2 rounded-full border border-muted-foreground/18"></div>
			</div>
			<div class="flex h-12 flex-col gap-1.5 bg-muted/30 px-2 py-2">
				<div class="flex items-center justify-between">
					<div class="h-1.5 w-3/4 rounded-full bg-muted-foreground/22"></div>
					<div class="h-px w-2 bg-muted-foreground/20"></div>
				</div>
				<div class="h-1 w-full rounded-full bg-muted-foreground/10"></div>
				<div class="h-1 w-5/6 rounded-full bg-muted-foreground/10"></div>
			</div>
		</div>
	</div>
</div>
