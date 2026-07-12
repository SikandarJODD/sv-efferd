<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex size-full grid-cols-2">
	<div class="flex flex-1">
		<div class="w-[20%] border-r">
			<div class="flex h-4 items-center border-b px-1">
				<div class="h-1.5 w-full rounded-full bg-muted-foreground/25"></div>
			</div>
			<div class="flex h-full flex-col justify-between p-1">
				<div class="flex flex-col gap-0.75">
					<div class="h-1.25 w-full rounded-full bg-muted-foreground/20"></div>
					<div class="h-1.25 w-full rounded-full bg-muted-foreground/20"></div>
					<div class="h-1.25 w-full rounded-full bg-muted-foreground/20"></div>
					<div class="h-1.25 w-full rounded-full bg-muted-foreground/20"></div>
					<div class="h-1.25 w-full rounded-full bg-muted-foreground/20"></div>
				</div>
				<div class="flex flex-col gap-0.5 pb-4">
					<div class="h-4 rounded-xs border border-border/50"></div>
					<div class="h-1 w-full rounded-full bg-muted-foreground/15"></div>
					<div class="h-1 w-full rounded-full bg-muted-foreground/15"></div>
					<div class="h-1 w-full rounded-full bg-muted-foreground/15"></div>
				</div>
			</div>
		</div>
		<div class="w-full gap-1">
			<div class="flex h-4 items-center justify-between border-b px-1.5">
				<div class="size-1.5 rounded-xs bg-muted-foreground/25"></div>
				<div class="flex gap-1">
					<div class="h-1.5 w-5 rounded-xs border"></div>
					<div class="size-1.5 rounded-xs bg-muted-foreground/25"></div>
					<div class="size-1.5 rounded-xs bg-muted-foreground/25"></div>
				</div>
			</div>
			<div class="flex flex-col p-2">
				<h3 class="font-heading text-sm font-medium md:text-base group-hover:text-emerald-500">{title}</h3>
				<p class="text-xs text-muted-foreground group-hover:text-emerald-700">{countLabel}</p>
				<div class="grid grid-cols-4 gap-0.5 pt-2 pb-1">
					<div class="h-6 w-full rounded-xs border border-border/80"></div>
					<div class="h-6 w-full rounded-xs border border-border/80"></div>
					<div class="h-6 w-full rounded-xs border border-border/80"></div>
					<div class="h-6 w-full rounded-xs border border-border/80"></div>
				</div>
				<div class="h-12 w-full rounded-sm border mask-b-from-60%"></div>
			</div>
		</div>
	</div>
</div>
