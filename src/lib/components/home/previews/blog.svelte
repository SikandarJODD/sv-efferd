<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col gap-2 px-3 py-3 sm:px-4 sm:py-4">
	<div>
		<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">{title}</h3>
		<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="grid flex-1 grid-cols-2 gap-2">
		<div class="overflow-hidden rounded-sm border border-border/80 bg-background">
			<div class="h-8 w-full bg-card"></div>
			<div class="space-y-1 border-t border-border/70 px-2 py-2">
				<div class="h-1.5 w-1/2 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1.5 w-3/4 rounded-full bg-muted-foreground/14"></div>
			</div>
		</div>
		<div class="overflow-hidden rounded-sm border border-border/80 bg-background">
			<div class="h-8 w-full bg-card"></div>
			<div class="space-y-1 border-t border-border/70 px-2 py-2">
				<div class="h-1.5 w-1/2 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1.5 w-3/4 rounded-full bg-muted-foreground/14"></div>
			</div>
		</div>
	</div>
</div>
