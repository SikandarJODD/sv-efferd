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
			<div class="grid grid-cols-[1.25fr_repeat(3,1fr)]">
				<div class="flex flex-col justify-center gap-1.5 border-r border-border/70 px-2 py-2">
					<div class="flex items-center gap-1.5">
						<div class="size-3 rounded-full bg-muted-foreground/20"></div>
						<div class="h-1.5 w-8 rounded-full bg-muted-foreground/18"></div>
					</div>
					<div class="h-1 w-3/4 rounded-full bg-muted-foreground/10"></div>
				</div>

				{#each Array(3) as _, index}
					<div class="flex flex-col justify-center gap-1.5 px-1.5 py-2">
						<div
							class="h-1.5 rounded-full bg-muted-foreground/20"
							class:w-4={index !== 1}
							class:w-5={index === 1}
						></div>
						<div class="h-1 w-6 rounded-full bg-muted-foreground/10"></div>
					</div>
				{/each}
			</div>
			<div class="flex h-5 items-center justify-between border-t border-border/70 px-2">
				<div class="h-1 w-10 rounded-full bg-muted-foreground/10"></div>
				<div class="flex gap-1">
					<div class="size-2 rounded-full border border-muted-foreground/16"></div>
					<div class="size-2 rounded-full border border-muted-foreground/16"></div>
					<div class="size-2 rounded-full border border-muted-foreground/16"></div>
				</div>
			</div>
		</div>
	</div>
</div>
