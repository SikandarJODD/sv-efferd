<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	const style = tv({
		base: "w-full rounded-lg border border-border",
		variants: {
			variant: {
				default: "bg-card",
				secondary: "border-transparent bg-secondary/50"
			}
		}
	});

	type Variant = VariantProps<typeof style>["variant"];

	export type PMCommandProps = {
		variant?: Variant;
		class?: string;
		title?: string;
		agents?: Agent[];
		agent?: Agent;
		command: Command;
		args: string[];
	};
</script>

<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Command, Agent } from "package-manager-detector";
	import { resolveCommand } from "package-manager-detector/commands";
	import CopyButton from "../copy-button/copy-button.svelte";
	import ClipboardIcon from "@lucide/svelte/icons/clipboard";
	import TerminalIcon from "@lucide/svelte/icons/terminal";
	import * as Tooltip from "#lib/components/ui/tooltip/index.js";
	import * as Tabs from "#lib/components/ui/tabs/index.js";
	import { page } from "$app/state";

	let {
		variant = "secondary",
		title,
		class: className,
		command,
		agents = ["npm", "pnpm", "yarn", "bun"],
		args,
		agent = $bindable("pnpm")
	}: PMCommandProps = $props();

	const cmd = $derived(resolveCommand(agent, command, args));

	const commandText = $derived(`${cmd?.command} ${cmd?.args.join(" ")}`);

	let componentName = $derived.by(() => {
		if (title) return title;
		let urlID = page.url.pathname.split("/").filter(Boolean).slice(-1)[0];
		console.log("URL ID:", urlID);
		return urlID ? decodeURIComponent(urlID) : "Command";
	});
</script>

<div class={cn(style({ variant }), className)}>
	<div class="flex place-items-center justify-between gap-2 border-b border-border py-1 pr-2">
		<div class="flex place-items-center gap-2 px-2">
			<div class="flex size-4 place-items-center justify-center bg-foreground opacity-50">
				<TerminalIcon class="size-3 text-background" />
			</div>
			<Tabs.Root bind:value={agent}>
				<Tabs.List class="h-auto bg-transparent p-0">
					{#each agents as pm (pm)}
						<Tabs.Trigger
							value={pm}
							class="h-7 cursor-pointer border-none font-mono text-sm font-light subpixel-antialiased shadow-none data-active:bg-neutral-200/80 data-active:dark:bg-muted/80"
						>
							{pm}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
			</Tabs.Root>
		</div>
		<Tooltip.Provider delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger>
					{#snippet child({ props })}
						<CopyButton
							title={componentName}
							{...props}
							text={commandText}
							class="size-6 [&_svg]:size-3"
						>
							{#snippet icon()}
								<ClipboardIcon />
							{/snippet}
						</CopyButton>
					{/snippet}
				</Tooltip.Trigger>
				<Tooltip.Content>Copy to Clipboard</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</div>
	<div class="no-scrollbar overflow-x-auto p-3">
		<span
			class="font-mono text-xs leading-none font-light text-nowrap text-primary subpixel-antialiased md:text-sm"
		>
			{commandText}
		</span>
	</div>
</div>

<style>
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
