<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col justify-center gap-3 px-3 py-3 sm:px-4 sm:py-4">
	<div class="text-center">
		<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">{title}</h3>
		<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="grid grid-cols-3">
		{#each Array(3) as _, index}
			<div
				class:border-r={index < 2}
				class="flex flex-col items-center justify-center gap-1.5 border-border/70 py-2"
			>
				<div class="size-3 rounded-full bg-primary/18"></div>
				<div class="h-1.5 w-5 rounded-full bg-muted-foreground/18"></div>
				<div class="h-1.5 w-9 rounded-full bg-muted-foreground/14"></div>
			</div>
		{/each}
	</div>
</div>
