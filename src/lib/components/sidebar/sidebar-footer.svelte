<script lang="ts">
	import BhideSvelteCard from "./bhide-svelte-card.svelte";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { Github, X as XLogo } from "#lib/svgs/index.js";
</script>

<Sidebar.Footer class="p-1">
	<div class="grid grid-cols-2 gap-2">
		<Button
			href="https://x.com/Sikandar_Bhide"
			target="_blank"
			rel="noreferrer"
			variant="secondary"
			size="sm"
			class="min-w-0 text-xs"
		>
			<XLogo class="size-3" />
			Twitter
		</Button>
		<Button
			href="https://github.com/SikandarJODD/sv-efferd"
			target="_blank"
			rel="noreferrer"
			variant="secondary"
			size="sm"
			class="min-w-0 text-xs"
		>
			<Github class="size-3" />
			GitHub
		</Button>
	</div>
	<BhideSvelteCard />
</Sidebar.Footer>
