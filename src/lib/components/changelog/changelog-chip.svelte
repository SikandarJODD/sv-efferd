<script lang="ts">
	import { cn } from '$lib/utils';
	import { ArrowUpRight } from '@lucide/svelte';
	import type { ChangelogChip as ChangelogChipType } from './data';

	type ChangelogChipProps = ChangelogChipType & {
		class?: string;
	};

	let { label, href, class: className }: ChangelogChipProps = $props();
</script>

<a
	class={cn(
		'inline-flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300 transition-colors hover:border-emerald-400/30 hover:bg-emerald-500/15 hover:text-emerald-200',
		className
	)}
	href={href}
>
	<span>{label}</span>
	<ArrowUpRight class="size-3" />
</a>
