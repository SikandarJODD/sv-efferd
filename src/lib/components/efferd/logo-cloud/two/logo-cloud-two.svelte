<script lang="ts">
	import { DecorIcon } from "#lib/components/ui/decor-icon/index.js";
	import LogoCard from "./logo-card.svelte";
	import { wordmarkLogosByName } from "../wordmark-logos";
</script>

<div class="grid grid-cols-2 border md:grid-cols-4">
	<LogoCard
		class="relative border-r border-b bg-secondary dark:bg-secondary/30"
		logo={wordmarkLogosByName.nvidia}
	>
		<DecorIcon class="z-10" position="bottom-right" />
	</LogoCard>

	<LogoCard class="border-b md:border-r" logo={wordmarkLogosByName.supabase} />

	<LogoCard
		class="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
		logo={wordmarkLogosByName.github}
	>
		<DecorIcon class="z-10" position="bottom-right" />
		<DecorIcon class="z-10 hidden md:block" position="bottom-left" />
	</LogoCard>

	<LogoCard
		class="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
		logo={wordmarkLogosByName.openai}
	/>

	<LogoCard
		class="relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
		logo={wordmarkLogosByName.turso}
	>
		<DecorIcon class="z-10 md:hidden" position="bottom-right" />
	</LogoCard>

	<LogoCard
		class="border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
		logo={wordmarkLogosByName.clerk}
	/>

	<LogoCard class="border-r" logo={wordmarkLogosByName.claude} />

	<LogoCard class="bg-secondary dark:bg-secondary/30" logo={wordmarkLogosByName.vercel} />
</div>
