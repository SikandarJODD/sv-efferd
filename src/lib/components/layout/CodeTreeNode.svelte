<script lang="ts">
	import type { BlockCodeNode } from "$lib/blocks/showcase";
	import { cn } from "$lib/utils";
	import ChevronDown from "@lucide/svelte/icons/chevron-down";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import FileCode2 from "@lucide/svelte/icons/file-code-2";
	import Folder from "@lucide/svelte/icons/folder";
	import FolderOpen from "@lucide/svelte/icons/folder-open";
	import CodeTreeNode from "./CodeTreeNode.svelte";
	import { slide } from "svelte/transition";

	interface CodeTreeNodeProps {
		node: BlockCodeNode;
		activeFileId: string;
		openFolderIds: Set<string>;
		onSelectFile: (fileId: string) => void;
		onToggleFolder: (folderId: string) => void;
	}

	let { node, activeFileId, openFolderIds, onSelectFile, onToggleFolder }: CodeTreeNodeProps =
		$props();

	let isOpen = $derived(node.type === "folder" ? openFolderIds.has(node.id) : false);
	let isExternalOnlyFile = $derived(
		node.type === "file" && Boolean(node.externalUrl) && !node.code
	);
</script>

{#if node.type === "folder"}
	<div>
		<button
			type="button"
			class="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[13px] font-mono text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
			onclick={() => onToggleFolder(node.id)}
		>
			<span class="flex w-4 shrink-0 items-center justify-center">
				<!-- {#if isOpen}
					<ChevronDown class="size-3.5" />
				{:else}
					<ChevronRight class="size-3.5" />
					{/if} -->
				<ChevronRight
					class={[
						"size-3.5 transition duration-150 ease-out",
						isOpen ? "rotate-90 text-foreground/80" : "text-foreground/60"
					]}
				/>
			</span>
			{#if isOpen}
				<FolderOpen class="size-3.5 text-foreground/80" />
			{:else}
				<Folder class="size-3.5 text-foreground/80" />
			{/if}
			<span class="truncate">{node.name}</span>
		</button>

		{#if isOpen}
			<div transition:slide={{ duration: 180 }} class="ml-4 border-l border-border/60 pl-1.5">
				{#each node.children as child (child.id)}
					<CodeTreeNode
						node={child}
						{activeFileId}
						{openFolderIds}
						{onSelectFile}
						{onToggleFolder}
					/>
				{/each}
			</div>
		{/if}
	</div>
{:else if isExternalOnlyFile}
	<a
		href={node.externalUrl}
		target="_blank"
		rel="noreferrer"
		aria-label={`Open ${node.externalLabel ?? node.name}`}
		class="flex items-center gap-1 rounded-md pl-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
	>
		<!-- <span class="w-4 shrink-0"></span> -->
		<!-- <FileCode2 class="size-3.5 shrink-0 text-sky-500" /> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M13.5635 1.32604C13.2451 1.24959 12.9156 1.24978 12.497 1.25003L8.7679 1.25005C7.95506 1.25005 7.29944 1.25004 6.76853 1.29342C6.2219 1.33808 5.74176 1.43244 5.29754 1.65878C4.59193 2.01831 4.01825 2.59198 3.65873 3.29759C3.43239 3.74181 3.33803 4.22195 3.29336 4.76859C3.24999 5.29949 3.24999 5.9551 3.25 6.76793V17.2322C3.24999 18.045 3.24999 18.7006 3.29336 19.2315C3.33803 19.7782 3.43239 20.2583 3.65873 20.7025C4.01825 21.4081 4.59193 21.9818 5.29754 22.3413C5.74175 22.5677 6.2219 22.662 6.76853 22.7067C7.29944 22.7501 7.95505 22.7501 8.76788 22.7501H15.2321C16.045 22.7501 16.7006 22.7501 17.2315 22.7067C17.7781 22.662 18.2582 22.5677 18.7025 22.3413C19.4081 21.9818 19.9818 21.4081 20.3413 20.7025C20.5676 20.2583 20.662 19.7782 20.7066 19.2315C20.75 18.7006 20.75 18.045 20.75 17.2322L20.75 9.50307C20.7503 9.08445 20.7505 8.75492 20.674 8.43651C20.6067 8.15591 20.4955 7.88766 20.3448 7.64161C20.1737 7.3624 19.9405 7.12953 19.6443 6.8337L15.1664 2.35572C14.8705 2.05955 14.6376 1.82639 14.3584 1.65529C14.1124 1.50452 13.8441 1.3934 13.5635 1.32604ZM12.75 2.75125C12.6615 2.75035 12.5549 2.75005 12.4245 2.75005H8.8C7.94755 2.75005 7.35331 2.75064 6.89068 2.78844C6.43681 2.82552 6.17604 2.89465 5.97852 2.99529C5.55516 3.21101 5.21095 3.55521 4.99524 3.97858C4.8946 4.17609 4.82547 4.43686 4.78838 4.89073C4.75058 5.35337 4.75 5.9476 4.75 6.80006V17.2001C4.75 18.0525 4.75058 18.6467 4.78838 19.1094C4.82547 19.5633 4.8946 19.824 4.99524 20.0215C5.21095 20.4449 5.55516 20.7891 5.97852 21.0048C6.17604 21.1055 6.43681 21.1746 6.89068 21.2117C7.35331 21.2495 7.94755 21.2501 8.8 21.2501H15.2C16.0525 21.2501 16.6467 21.2495 17.1093 21.2117C17.5632 21.1746 17.824 21.1055 18.0215 21.0048C18.4448 20.7891 18.789 20.4449 19.0048 20.0215C19.1054 19.824 19.1745 19.5633 19.2116 19.1094C19.2494 18.6467 19.25 18.0525 19.25 17.2001V9.57554C19.25 9.44518 19.2497 9.33854 19.2488 9.25H15.5C13.9812 9.25 12.75 8.01878 12.75 6.5V2.75125ZM18.4393 7.75L14.25 3.56071V6.5C14.25 7.19036 14.8096 7.75 15.5 7.75H18.4393Z"
				fill="currentColor"
			></path></svg
		>
		<span class="min-w-0 flex-1 truncate py-1.5">{node.name}</span>
		<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-md">
			<ExternalLink class="size-3.5" />
		</span>
	</a>
{:else}
	<div
		class={cn(
			"flex items-center gap-1 rounded-md text-[13px] my-px transition-colors",
			activeFileId === node.id
				? "bg-accent text-foreground"
				: "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
		)}
	>
		<button
			type="button"
			class="flex min-w-0 flex-1 items-center gap-2 px-2 py-1.5 text-left"
			onclick={() => onSelectFile(node.id)}
		>
			<!-- <span class="w-4 shrink-0"></span> -->
			<!-- <FileCode2 class="size-3.5 shrink-0 text-sky-500" /> -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M13.5635 1.32604C13.2451 1.24959 12.9156 1.24978 12.497 1.25003L8.7679 1.25005C7.95506 1.25005 7.29944 1.25004 6.76853 1.29342C6.2219 1.33808 5.74176 1.43244 5.29754 1.65878C4.59193 2.01831 4.01825 2.59198 3.65873 3.29759C3.43239 3.74181 3.33803 4.22195 3.29336 4.76859C3.24999 5.29949 3.24999 5.9551 3.25 6.76793V17.2322C3.24999 18.045 3.24999 18.7006 3.29336 19.2315C3.33803 19.7782 3.43239 20.2583 3.65873 20.7025C4.01825 21.4081 4.59193 21.9818 5.29754 22.3413C5.74175 22.5677 6.2219 22.662 6.76853 22.7067C7.29944 22.7501 7.95505 22.7501 8.76788 22.7501H15.2321C16.045 22.7501 16.7006 22.7501 17.2315 22.7067C17.7781 22.662 18.2582 22.5677 18.7025 22.3413C19.4081 21.9818 19.9818 21.4081 20.3413 20.7025C20.5676 20.2583 20.662 19.7782 20.7066 19.2315C20.75 18.7006 20.75 18.045 20.75 17.2322L20.75 9.50307C20.7503 9.08445 20.7505 8.75492 20.674 8.43651C20.6067 8.15591 20.4955 7.88766 20.3448 7.64161C20.1737 7.3624 19.9405 7.12953 19.6443 6.8337L15.1664 2.35572C14.8705 2.05955 14.6376 1.82639 14.3584 1.65529C14.1124 1.50452 13.8441 1.3934 13.5635 1.32604ZM12.75 2.75125C12.6615 2.75035 12.5549 2.75005 12.4245 2.75005H8.8C7.94755 2.75005 7.35331 2.75064 6.89068 2.78844C6.43681 2.82552 6.17604 2.89465 5.97852 2.99529C5.55516 3.21101 5.21095 3.55521 4.99524 3.97858C4.8946 4.17609 4.82547 4.43686 4.78838 4.89073C4.75058 5.35337 4.75 5.9476 4.75 6.80006V17.2001C4.75 18.0525 4.75058 18.6467 4.78838 19.1094C4.82547 19.5633 4.8946 19.824 4.99524 20.0215C5.21095 20.4449 5.55516 20.7891 5.97852 21.0048C6.17604 21.1055 6.43681 21.1746 6.89068 21.2117C7.35331 21.2495 7.94755 21.2501 8.8 21.2501H15.2C16.0525 21.2501 16.6467 21.2495 17.1093 21.2117C17.5632 21.1746 17.824 21.1055 18.0215 21.0048C18.4448 20.7891 18.789 20.4449 19.0048 20.0215C19.1054 19.824 19.1745 19.5633 19.2116 19.1094C19.2494 18.6467 19.25 18.0525 19.25 17.2001V9.57554C19.25 9.44518 19.2497 9.33854 19.2488 9.25H15.5C13.9812 9.25 12.75 8.01878 12.75 6.5V2.75125ZM18.4393 7.75L14.25 3.56071V6.5C14.25 7.19036 14.8096 7.75 15.5 7.75H18.4393Z"
					fill="currentColor"
				></path></svg
			>
			<span class="truncate">{node.name}</span>
		</button>

		{#if node.externalUrl}
			<a
				href={node.externalUrl}
				target="_blank"
				rel="noreferrer"
				aria-label={`Open ${node.externalLabel ?? node.name}`}
				class="mr-2 inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
			>
				<ExternalLink class="size-3.5" />
			</a>
		{/if}
	</div>
{/if}
