<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col items-center justify-center overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
	<div class="pb-2.5 text-center">
		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div
		class="h-px w-full max-w-[55%] bg-border/80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
	></div>
	<div
		class="flex w-full items-center gap-2 overflow-hidden bg-muted/15 [mask-image:linear-gradient(to_right,transparent,black,transparent)] py-2.5"
	>
		{#each Array(7) as _, index}
			<div
				class="flex h-5 w-13 shrink-0 items-center gap-1.5 rounded-sm border border-border/70 bg-background px-1.5"
			>
				<div
					class:rounded-full={index % 2 === 0}
					class="size-2 rounded-xs bg-muted-foreground/18"
				></div>
				<div class="h-1 flex-1 rounded-full bg-muted-foreground/12"></div>
			</div>
		{/each}
	</div>
	<div
		class="h-px w-full bg-border/80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
	></div>
</div>
