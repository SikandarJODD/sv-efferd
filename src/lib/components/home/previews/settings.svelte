<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex size-full flex-col p-3">
	<div>
		<h3 class="font-heading text-sm font-medium group-hover:text-emerald-500 md:text-base">
			{title}
		</h3>
		<p class="text-xs text-muted-foreground group-hover:text-emerald-700">{countLabel}</p>
	</div>

	<div class="mt-3 space-y-2 rounded-sm border p-2">
		<div class="flex items-center justify-between">
			<div class="space-y-1">
				<div class="h-1.5 w-10 rounded-full bg-muted-foreground/25"></div>
				<div class="h-1 w-16 rounded-full bg-muted-foreground/15"></div>
			</div>
			<div class="size-5 rounded-full border bg-muted"></div>
		</div>
		<div class="h-px bg-border"></div>
		<div class="flex items-center justify-between">
			<div class="h-1.5 w-12 rounded-full bg-muted-foreground/20"></div>
			<div class="h-3 w-6 rounded-full bg-primary/70"></div>
		</div>
	</div>
</div>
