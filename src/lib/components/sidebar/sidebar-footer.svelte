<script lang="ts">
	import { FileText } from "@lucide/svelte";
	import BhideSvelteCard from "./bhide-svelte-card.svelte";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { Github } from "#lib/svgs/index.js";
</script>

<Sidebar.Footer>
	<div class="grid grid-cols-2 gap-2">
		<Button href="/llms.txt" variant="outline" size="sm" class="min-w-0">
			<FileText class="size-3.5" />
			llms.txt
		</Button>
		<Button
			href="https://github.com/SikandarJODD/sv-efferd"
			target="_blank"
			rel="noreferrer"
			variant="outline"
			size="sm"
			class="min-w-0"
		>
			<Github class="size-3.5" />
			GitHub
		</Button>
	</div>
	<BhideSvelteCard />
</Sidebar.Footer>
