<script lang="ts">
	import type { BlockCodeFile } from "#lib/blocks/showcase.js";
	import CssIcon from "./icons/css.svelte";
	import FileIcon from "./icons/file.svelte";
	import JavaScriptIcon from "./icons/javascript.svelte";
	import JsonIcon from "./icons/json.svelte";
	import MarkdownIcon from "./icons/markdown.svelte";
	import ShadcnSvelteIcon from "./icons/shadcn-svelte.svelte";
	import SvelteIcon from "./icons/svelte-icon.svelte";
	import TypeScriptIcon from "./icons/typescript.svelte";

	let { file, class: className }: { file: BlockCodeFile; class?: string } = $props();

	let fileName = $derived(file.name.toLowerCase());
	let isShadcnSvelte = $derived(
		/(^|\/)components\/ui\//.test(file.path.replaceAll("\\", "/"))
	);
</script>

{#if isShadcnSvelte}
	<ShadcnSvelteIcon class={className} />
{:else if fileName.endsWith(".svelte")}
	<SvelteIcon class={className} />
{:else if fileName.endsWith(".ts") || fileName.endsWith(".tsx")}
	<TypeScriptIcon class={className} />
{:else if fileName.endsWith(".js") || fileName.endsWith(".jsx") || fileName.endsWith(".mjs") || fileName.endsWith(".cjs")}
	<JavaScriptIcon class={className} />
{:else if fileName.endsWith(".json")}
	<JsonIcon class={className} />
{:else if fileName.endsWith(".css")}
	<CssIcon class={className} />
{:else if fileName.endsWith(".md") || fileName.endsWith(".mdx")}
	<MarkdownIcon class={className} />
{:else}
	<FileIcon class={className} />
{/if}
