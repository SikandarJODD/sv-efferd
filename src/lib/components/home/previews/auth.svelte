<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="grid h-full grid-cols-2 overflow-hidden">
	<div class="flex flex-col border-r px-3 py-3 sm:px-4 sm:py-4">
		<h3 class="font-heading text-base font-normal text-foreground">{title}</h3>
		<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>

		<div class="mt-auto flex items-center gap-1.5 pb-1">
			<div class="flex">
				<div class="size-2 rounded-full border border-background bg-muted-foreground/18"></div>
				<div class="-ml-0.5 size-2 rounded-full border border-background bg-muted-foreground/13"></div>
				<div class="-ml-0.5 size-2 rounded-full border border-background bg-muted-foreground/9"></div>
			</div>
			<div class="h-1 w-8 rounded-full bg-muted-foreground/12"></div>
		</div>
	</div>

	<div class="flex items-center bg-muted/20 px-2.5 py-3">
		<div class="w-full rounded-sm border bg-background p-2 shadow-xs mask-b-from-90%">
			<div class="mb-2 flex items-center justify-center gap-1.5">
				<div class="size-2.5 rounded-full bg-muted-foreground/20"></div>
				<div class="h-1.5 w-10 rounded-full bg-muted-foreground/18"></div>
			</div>

			<div class="mb-1 h-1 w-7 rounded-full bg-muted-foreground/14"></div>
			<div class="mb-1.5 h-3.5 rounded-xs border border-border/80 bg-muted/25"></div>
			<div class="mb-1 h-1 w-9 rounded-full bg-muted-foreground/14"></div>
			<div class="mb-1.5 h-3.5 rounded-xs border border-border/80 bg-muted/25"></div>

			<div class="mb-2 flex items-center justify-between">
				<div class="flex items-center gap-1">
					<div class="size-1.5 rounded-xs border border-border"></div>
					<div class="h-1 w-7 rounded-full bg-muted-foreground/10"></div>
				</div>
				<div class="h-1 w-7 rounded-full bg-muted-foreground/14"></div>
			</div>

			<div
				class="h-4 w-full rounded-sm bg-muted-foreground/20 transition-colors duration-200 group-hover:bg-muted-foreground/28"
			></div>
		</div>
	</div>
</div>
