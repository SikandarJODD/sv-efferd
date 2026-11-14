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
	<div class="flex flex-col justify-center px-3 py-4">
		<div class="mx-auto mb-2 h-2 w-14 rounded-full bg-muted-foreground/18"></div>
		<div class="mb-1.5 h-1.5 w-full rounded-full bg-muted-foreground/10"></div>
		<div class="mb-2 h-1.5 w-full rounded-full bg-muted-foreground/10"></div>
		<div class="h-4 w-full rounded-sm bg-primary/18"></div>
	</div>
</div>
