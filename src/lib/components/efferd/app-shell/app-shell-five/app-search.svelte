<script lang="ts">
	import * as InputGroup from "#lib/components/ui/input-group/index.js";
	import * as Kbd from "#lib/components/ui/kbd/index.js";
	import { useSidebar } from "#lib/components/ui/sidebar/index.js";
	import { SearchIcon } from "@lucide/svelte";
	import { PressedKeys } from "runed";

	let groupRef: HTMLDivElement;
	const sidebar = useSidebar();
	const pressedKeys = new PressedKeys();
	const focusSearch = () => {
		groupRef?.querySelector<HTMLInputElement>("[data-slot=input-group-control]")?.focus({ preventScroll: true });
		sidebar.setOpen(true);
	};

	pressedKeys.onKeys(["meta", "k"], focusSearch);
	pressedKeys.onKeys(["control", "k"], focusSearch);
</script>

<InputGroup.Root bind:ref={groupRef}>
	<InputGroup.Addon align="inline-start" class="pl-1.75"><SearchIcon /></InputGroup.Addon>
	<InputGroup.Input aria-label="Search" name="q" placeholder="Search..." type="search" />
	<InputGroup.Addon align="inline-end"><Kbd.Group><Kbd.Root>⌘</Kbd.Root><Kbd.Root>K</Kbd.Root></Kbd.Group></InputGroup.Addon>
</InputGroup.Root>
