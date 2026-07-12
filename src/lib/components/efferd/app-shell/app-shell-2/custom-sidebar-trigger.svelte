<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import * as Kbd from "$lib/components/ui/kbd/index.js";
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		<Sidebar.Trigger />
	</Tooltip.Trigger>
	<Tooltip.Content>
		Toggle Sidebar
		<Kbd.Group>
			<Kbd.Root>⌘</Kbd.Root>
			<Kbd.Root>b</Kbd.Root>
		</Kbd.Group>
	</Tooltip.Content>
</Tooltip.Root>
