<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div class="flex size-full min-h-0 flex-col overflow-hidden p-3">
	<div>
		<h3 class="font-heading text-sm font-medium md:text-base">{title}</h3>
		<p class="text-xs text-muted-foreground">{countLabel}</p>
	</div>

	<div class="mt-2.5 flex min-h-0 flex-1 overflow-hidden rounded-sm border bg-muted/20 mask-b-from-85%">
		<div class="flex w-[18%] shrink-0 flex-col gap-1 border-r p-1.5">
			<div class="mb-1 size-3 rounded-full bg-muted-foreground/20"></div>
			<div class="h-1.5 w-full rounded-full bg-muted-foreground/25"></div>
			<div class="h-1.5 w-4/5 rounded-full bg-muted-foreground/15"></div>
			<div class="h-1.5 w-full rounded-full bg-muted-foreground/15"></div>
			<div class="h-1.5 w-3/4 rounded-full bg-muted-foreground/15"></div>
		</div>

		<div class="flex min-w-0 flex-1 flex-col bg-background px-2">
			<div class="flex min-h-8 items-center justify-between gap-2 border-b">
				<div class="flex min-w-0 flex-col gap-1">
					<div class="h-1.5 w-10 rounded-full bg-muted-foreground/25"></div>
					<div class="h-1 w-16 rounded-full bg-muted-foreground/15"></div>
				</div>
				<div class="size-4 shrink-0 rounded-full border bg-muted"></div>
			</div>

			<div class="flex min-h-7 items-center justify-between gap-2 border-b">
				<div class="h-1.5 w-12 rounded-full bg-muted-foreground/20"></div>
				<div class="h-3 w-6 shrink-0 rounded-full bg-muted-foreground/25 p-0.5">
					<div class="size-2 rounded-full bg-background shadow-xs"></div>
				</div>
			</div>

			<div class="flex min-h-7 items-center justify-between gap-2">
				<div class="h-1.5 w-9 rounded-full bg-muted-foreground/20"></div>
				<div class="flex h-3.5 w-12 shrink-0 items-center justify-between rounded-xs border px-1">
					<div class="h-1 w-5 rounded-full bg-muted-foreground/15"></div>
					<div class="size-1 rounded-full bg-muted-foreground/25"></div>
				</div>
			</div>
		</div>
	</div>
</div>
