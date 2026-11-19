<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col items-center justify-center gap-2.5 overflow-hidden">
	<h3 class="font-heading px-3 text-center text-base font-normal text-foreground">
		{title}
	</h3>
	<div class="w-full px-3">
		<div class="grid grid-cols-2 overflow-hidden rounded-sm border border-border/80 bg-muted/15">
			<div class="flex flex-col justify-center gap-1 border-r border-border/70 px-2 py-2">
				<p class="text-xs leading-4 text-muted-foreground">{countLabel}</p>
				<div class="h-1.5 w-4/5 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1 w-3/5 rounded-full bg-muted-foreground/10"></div>
			</div>
			<div class="flex flex-col justify-center gap-1.5 bg-background px-2 py-2">
				<div class="flex gap-1.5">
					<div
						class="h-4 flex-1 rounded-sm bg-muted-foreground/20 transition-colors duration-200 group-hover:bg-muted-foreground/28"
					></div>
					<div class="h-4 flex-1 rounded-sm border border-border/80"></div>
				</div>
				<div class="flex items-center gap-1">
					<div class="size-2 rounded-full bg-muted-foreground/14"></div>
					<div class="size-2 rounded-full bg-muted-foreground/10"></div>
					<div class="h-1 w-7 rounded-full bg-muted-foreground/10"></div>
				</div>
			</div>
		</div>
	</div>
</div>
