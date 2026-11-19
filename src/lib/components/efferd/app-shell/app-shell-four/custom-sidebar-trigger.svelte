<script lang="ts">
	import * as Kbd from "#lib/components/ui/kbd/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import * as Tooltip from "#lib/components/ui/tooltip/index.js";
</script>

<Tooltip.Root delayDuration={1000}>
	<Tooltip.Trigger>
		{#snippet child({ props })}<Sidebar.Trigger class="size-9" {...props} />{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content class="px-2 py-1" side="right">
		Toggle Sidebar <Kbd.Group><Kbd.Root>⌘</Kbd.Root><Kbd.Root>b</Kbd.Root></Kbd.Group>
	</Tooltip.Content>
</Tooltip.Root>
