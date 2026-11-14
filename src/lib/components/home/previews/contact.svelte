<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="grid h-full grid-cols-2 gap-3 px-3 py-3 sm:px-4 sm:py-4">
	<div class="flex flex-col justify-center gap-2">
		<div>
			<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">
				{title}
			</h3>
			<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
		</div>
		<div class="h-1.5 w-full rounded-full bg-muted-foreground/14"></div>
		<div class="h-1.5 w-full rounded-full bg-muted-foreground/14"></div>
	</div>
	<div class="flex flex-col gap-1.5 rounded-md border border-border/80 bg-background px-2.5 py-2">
		<div class="h-1.5 w-8 rounded-full bg-muted-foreground/18"></div>
		<div class="h-3 w-full rounded-sm border border-border/70 bg-muted/10"></div>
		<div class="h-1.5 w-8 rounded-full bg-muted-foreground/18"></div>
		<div class="h-3 w-full rounded-sm border border-border/70 bg-muted/10"></div>
		<div class="mt-auto h-4 w-full rounded-sm bg-primary/18"></div>
	</div>
</div>
