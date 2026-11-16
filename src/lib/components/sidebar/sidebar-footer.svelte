<script lang="ts">
	import { FileText } from "@lucide/svelte";
	import BhideSvelteCard from "./bhide-svelte-card.svelte";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { Github } from "#lib/svgs/index.js";
</script>

<Sidebar.Footer class="p-0.5">
	<div class="grid grid-cols-2 gap-2">
		<Button href="/llms.txt" variant="secondary" size="sm" class="min-w-0 text-xs">
			<FileText class="size-3" />
			llms.txt
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
