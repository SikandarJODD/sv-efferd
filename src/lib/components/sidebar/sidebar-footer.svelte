<script lang="ts">
	import BhideSvelteCard from "./bhide-svelte-card.svelte";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { X as XLogo } from "#lib/components/svgs/index.js";
</script>

<Sidebar.Footer class="p-1">
	<a
		href="https://x.com/Sikandar_Bhide"
		target="_blank"
		rel="noreferrer"
		class="group flex min-h-10 items-center gap-2 rounded-md px-2 py-1.5 transition-colors outline-none hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-sidebar-ring"
	>
		<XLogo
			class="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
		/>
		<span class="min-w-0 leading-tight">
			<span class="block text-[10px] text-muted-foreground">Want a block we don’t have?</span>
			<span class="block text-xs font-medium text-foreground"
				>DM me on X <span aria-hidden="true">→</span></span
			>
		</span>
	</a>
	<BhideSvelteCard />
</Sidebar.Footer>
