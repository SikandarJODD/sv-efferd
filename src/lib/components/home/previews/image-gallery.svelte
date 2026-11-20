<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex h-full flex-col gap-2 px-3 py-3 sm:px-4 sm:py-4">
	<div class="text-center">
		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>
	</div>
	<div class="relative flex-1 overflow-hidden mask-b-from-78%">
		<div class="absolute inset-0 grid grid-cols-4 gap-1.5">
			<div class="flex flex-col gap-1.5">
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
				<div class="aspect-square rounded-sm bg-muted-foreground/8"></div>
			</div>
			<div class="flex flex-col gap-1.5 pt-5">
				<div
					class="relative aspect-square overflow-hidden rounded-sm bg-muted-foreground/10"
				>
					<div
						class="absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-linear-to-r from-transparent via-background/45 to-transparent transition-transform duration-500 group-hover:translate-x-[400%]"
					></div>
				</div>
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
			</div>
			<div class="flex flex-col gap-1.5 pt-5">
				<div class="aspect-square rounded-sm bg-muted-foreground/12"></div>
				<div class="aspect-square rounded-sm bg-muted-foreground/9"></div>
			</div>
			<div class="flex flex-col gap-1.5">
				<div class="aspect-square rounded-sm bg-muted-foreground/8"></div>
				<div class="aspect-square rounded-sm bg-muted-foreground/10"></div>
			</div>
		</div>
	</div>
</div>
