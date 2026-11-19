<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col overflow-hidden">
	<div class="px-3 pt-3 text-center sm:px-4 sm:pt-4">
		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="mt-auto px-3 pb-3 sm:px-4">
		<div class="overflow-hidden rounded-t-sm border border-b-0 border-border/80 bg-background">
			<div class="flex h-6 items-center justify-between border-b border-border/70 px-2">
				<div class="flex items-center gap-1.5">
					<div class="size-2.5 rounded-full bg-muted-foreground/20"></div>
					<div class="h-1.5 w-7 rounded-full bg-muted-foreground/16"></div>
				</div>
				<div class="h-3 w-8 rounded-sm border border-border/80"></div>
			</div>

			<div class="grid grid-cols-3 gap-3 px-2 py-2">
				{#each Array(3) as _}
					<div class="flex flex-col gap-1">
						<div class="mb-0.5 h-1.5 w-5 rounded-full bg-muted-foreground/20"></div>
						<div class="h-1 w-7 rounded-full bg-muted-foreground/12"></div>
						<div class="h-1 w-6 rounded-full bg-muted-foreground/10"></div>
					</div>
				{/each}
			</div>

			<div class="flex h-5 items-center justify-between border-t border-border/70 px-2">
				<div class="h-1 w-10 rounded-full bg-muted-foreground/10"></div>
				<div class="flex gap-1">
					<div class="size-2 rounded-full border border-muted-foreground/16"></div>
					<div class="size-2 rounded-full border border-muted-foreground/16"></div>
				</div>
			</div>
		</div>
	</div>
</div>
