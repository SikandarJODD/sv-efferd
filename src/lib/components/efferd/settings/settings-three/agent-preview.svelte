<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";
	import { Badge } from "#lib/components/ui/badge/index.js";
	import { Card, CardContent, CardFooter, CardHeader } from "#lib/components/ui/card/index.js";

	const stats = [
		{ label: "CSAT", value: "94%" },
		{ label: "Assigned", value: "6" },
		{ label: "Reply", value: "4.1m" }
	] as const;
</script>

<Card class="h-full gap-0 shadow-none dark:ring-0">
	<CardHeader>
		<Badge variant="secondary">Public Preview</Badge>
	</CardHeader>
	<CardContent class="flex flex-1 flex-col items-start justify-center px-(--card-spacing) py-8">
		<Avatar class="size-20">
			<AvatarImage alt="" src="https://github.com/shabanhr.png" />
			<AvatarFallback>SH</AvatarFallback>
		</Avatar>
		<p class="font-heading mt-4 text-xl font-medium text-balance">Shaban Haider</p>
		<p class="mt-1 text-sm text-pretty text-muted-foreground">Support lead · Karachi</p>
		<div class="mt-3 flex items-center gap-1.5 text-xs">
			<span class="relative flex size-2" aria-hidden="true">
				<span
					class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75"
				></span>
				<span class="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
			</span>
			<span>Online</span>
			<span class="truncate text-muted-foreground">· typically replies in 4.1m</span>
		</div>
	</CardContent>
	<CardFooter class="grid w-full grid-cols-3 divide-x border-t">
		{#each stats as stat (stat.label)}
			<div class="flex flex-col gap-1 ps-4">
				<p class="font-mono text-[10px] text-muted-foreground">{stat.label}</p>
				<p class="text-sm font-medium tabular-nums">{stat.value}</p>
			</div>
		{/each}
	</CardFooter>
</Card>
