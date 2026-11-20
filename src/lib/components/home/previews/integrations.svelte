<script lang="ts">
	interface Props {
		title: string;
		countLabel: string;
	}

	let { title, countLabel }: Props = $props();
</script>

<div
	class="relative grid h-full grid-cols-2 place-content-center overflow-hidden px-3 py-3 sm:px-4 sm:py-4"
>
	<svg
		class="pointer-events-none absolute inset-0 size-full [mask-image:linear-gradient(to_right,transparent_0%,transparent_42%,black_64%,black_100%)] text-muted-foreground/16"
		aria-hidden="true"
	>
		<defs>
			<pattern
				id="integration-graph-grid"
				width="12"
				height="12"
				patternUnits="userSpaceOnUse"
			>
				<path d="M12 0H0V12" fill="none" stroke="currentColor" stroke-width="0.65" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#integration-graph-grid)" />
	</svg>

	<div class="relative flex items-center">
		<div>
			<h3 class="font-heading text-base font-normal text-foreground">
				{title}
			</h3>
			<p class="mt-0.5 text-xs leading-4 text-muted-foreground">{countLabel}</p>
		</div>
	</div>
	<div class="relative mx-auto size-24">
		<div
			class="absolute inset-3 rounded-full border border-dashed border-muted-foreground/20"
		></div>
		<div class="absolute top-1/2 left-3 h-px w-18 -translate-y-1/2 bg-border"></div>
		<div class="absolute top-3 left-1/2 h-18 w-px -translate-x-1/2 bg-border"></div>

		<div
			class="absolute inset-0 m-auto flex size-9 items-center justify-center rounded-md border border-muted-foreground/25 bg-background shadow-xs transition-colors duration-200 group-hover:border-muted-foreground/40"
		>
			<div class="grid size-4 grid-cols-2 gap-0.5 rounded-sm bg-muted p-0.5">
				<div class="rounded-xs bg-muted-foreground/18"></div>
				<div class="rounded-xs bg-muted-foreground/12"></div>
				<div class="rounded-xs bg-muted-foreground/12"></div>
				<div class="rounded-xs bg-muted-foreground/18"></div>
			</div>
		</div>
		<div
			class="absolute top-0 left-1/2 flex size-5 -translate-x-1/2 items-center justify-center rounded-sm border border-muted-foreground/20 bg-background shadow-xs"
		>
			<div class="size-2 rounded-full bg-muted-foreground/20"></div>
		</div>
		<div
			class="absolute top-1/2 right-0 flex size-5 -translate-y-1/2 items-center justify-center rounded-sm border border-muted-foreground/20 bg-background shadow-xs"
		>
			<div class="size-2 rounded-xs bg-muted-foreground/20"></div>
		</div>
		<div
			class="absolute bottom-0 left-1/2 flex size-5 -translate-x-1/2 items-center justify-center rounded-sm border border-muted-foreground/20 bg-background shadow-xs"
		>
			<div class="h-2 w-2.5 rounded-full bg-muted-foreground/20"></div>
		</div>
		<div
			class="absolute top-1/2 left-0 flex size-5 -translate-y-1/2 items-center justify-center rounded-sm border border-muted-foreground/20 bg-background shadow-xs"
		>
			<div class="size-2 rounded-full border border-muted-foreground/30"></div>
		</div>

		<div
			class="absolute top-1/2 left-[28%] size-1 -translate-y-1/2 rounded-full bg-muted-foreground/25"
		></div>
		<div
			class="absolute top-[28%] left-1/2 size-1 -translate-x-1/2 rounded-full bg-muted-foreground/25"
		></div>
	</div>
</div>
