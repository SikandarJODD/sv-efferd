<script lang="ts">
	import { useAddProvider, type Agent } from './add.svelte.js';
	import { box } from 'svelte-toolbelt';
	import type { Snippet } from 'svelte';

	type Props = {
		agent: Agent;
		registry?: string;
		registryOptions?: readonly string[];
		children: Snippet;
	};

	let {
		agent = $bindable(),
		registry = $bindable(''),
		registryOptions,
		children
	}: Props = $props();

	let resolvedRegistryOptions = $derived(
		registryOptions?.length ? registryOptions : registry ? [registry] : ['shadcn-svelte']
	);

	$effect(() => {
		if (!registry && resolvedRegistryOptions[0]) {
			registry = resolvedRegistryOptions[0];
		}
	});

	useAddProvider({
		registryOptions: box.with(() => resolvedRegistryOptions),
		registry: box.with(
			() => registry,
			(v) => (registry = v)
		),
		agent: box.with(
			() => agent,
			(v) => (agent = v)
		)
	});
</script>

{@render children?.()}
