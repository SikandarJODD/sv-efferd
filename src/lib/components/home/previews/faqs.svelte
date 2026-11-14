<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="grid h-full grid-cols-2">
	<div class="border-r px-3 py-3 sm:px-4 sm:py-4">
		<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">{title}</h3>
		<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="flex items-center">
		<div class="w-full border-t border-border/70">
			<div class="flex h-6 items-center border-b border-border/70 px-2">
				<div class="h-1.5 w-2/3 rounded-full bg-muted-foreground/18"></div>
			</div>
			<div class="flex h-6 items-center border-b border-border/70 px-2">
				<div class="h-1.5 w-1/2 rounded-full bg-muted-foreground/18"></div>
			</div>
			<div class="flex h-14 flex-col gap-1.5 border-b border-border/70 bg-card px-2 py-2">
				<div class="h-1.5 w-3/4 rounded-full bg-primary/18"></div>
				<div class="h-1 w-full rounded-full bg-muted-foreground/10"></div>
				<div class="h-1 w-full rounded-full bg-muted-foreground/10"></div>
				<div class="h-1 w-5/6 rounded-full bg-muted-foreground/10"></div>
			</div>
		</div>
	</div>
</div>
