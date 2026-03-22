<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col gap-2 px-3 py-3 sm:px-4 sm:py-4">
	<div class="text-center">
		<h3 class="font-heading text-sm font-semibold tracking-tight text-foreground">{title}</h3>
		<p class="mt-0.5 text-[11px] leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="relative flex-1 overflow-hidden">
		<div class="absolute inset-0 grid grid-cols-4 gap-1.5">
			<div class="space-y-1.5">
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
			</div>
			<div class="space-y-1.5 pt-5">
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
			</div>
			<div class="space-y-1.5 pt-5">
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
			</div>
			<div class="space-y-1.5">
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
			</div>
		</div>
	</div>
</div>
