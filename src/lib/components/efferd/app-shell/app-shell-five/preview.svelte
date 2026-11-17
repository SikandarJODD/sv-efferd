<script lang="ts">
	import AppShell from "./app-shell.svelte";
</script>

<AppShell>
	<div class="grid grid-cols-2 gap-4 *:min-h-48 *:w-full *:rounded-lg *:bg-background *:ring-1 *:ring-border lg:grid-cols-4">
		<div></div><div></div><div></div><div></div>
		<div class="col-span-2 min-h-92! lg:col-span-2"></div>
		<div class="col-span-2 min-h-92! lg:col-span-2"></div>
		<div class="col-span-2 min-h-114! lg:col-span-4"></div>
	</div>
</AppShell>
