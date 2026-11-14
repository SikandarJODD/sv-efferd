<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col gap-3 px-3 py-3 sm:px-4 sm:py-4">
	<div class="rounded-md border border-border/80 bg-card px-2 py-1.5">
		<div class="flex items-center justify-between gap-3">
			<div class="size-3 rounded-full bg-primary/18"></div>
			<div class="flex gap-1.5">
				<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
				<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
				<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
			</div>
			<div class="h-3.5 w-10 rounded-sm bg-primary/18"></div>
		</div>
	</div>
	<div class="mt-auto text-center">
		<p class="text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
		<h3 class="font-heading mt-0.5 text-sm font-semibold tracking-tight text-foreground">
			{title}
		</h3>
	</div>
</div>
