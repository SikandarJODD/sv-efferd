<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col">
	<div class="px-3 pt-3 text-center sm:px-4 sm:pt-4">
		<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">{title}</h3>
		<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="mt-auto border-t border-border/70 px-3 py-3 sm:px-4">
		<div class="grid grid-cols-4 gap-2 border-x border-border/70 px-3 py-2">
			{#each [4, 4, 3, 1] as lines}
				<div class="space-y-1">
					<div class="mb-1 h-1.5 w-4 rounded-full bg-primary/18"></div>
					{#each Array(lines - 1) as _}
						<div class="h-1.5 w-6 rounded-full bg-muted-foreground/16"></div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
