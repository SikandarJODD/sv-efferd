<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col items-center justify-center px-3 py-3 sm:px-4 sm:py-4">
	<div class="pb-3 text-center">
		<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">{title}</h3>
		<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div
		class="h-px w-full max-w-[55%] bg-border/80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
	></div>
	<div
		class="flex w-full items-center gap-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] py-2"
	>
		{#each Array(8) as _}
			<div class="h-3.5 w-11 shrink-0 rounded-xs bg-muted-foreground/10"></div>
		{/each}
	</div>
	<div
		class="h-px w-full bg-border/80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
	></div>
</div>
