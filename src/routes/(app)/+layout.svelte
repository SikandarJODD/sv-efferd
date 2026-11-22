<script lang="ts">
	import SiteSidebar from "#lib/components/sidebar/sidebar.svelte";
	import SiteFooter from "#lib/components/site/footer.svelte";
	import SiteToolbar from "#lib/components/site/toolbar.svelte";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { AnimatePresence, motion, useReducedMotion } from "motion-sv";

	let { children } = $props();
	let sidebarOpen = $state(true);
	let prefersReducedMotion = useReducedMotion();
</script>

<svelte:head>
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
</svelte:head>

<Sidebar.Provider style="--sidebar-width: 13rem;" bind:open={sidebarOpen}>
	<SiteSidebar />
	<Sidebar.Inset
		class="border shadow-none! supports-[overflow:clip]:overflow-clip dark:border-muted dark:bg-background"
	>
		<AnimatePresence initial={false}>
			{#if !sidebarOpen}
				<motion.div
					class="absolute top-2 left-2 z-100 hidden md:block"
					initial={prefersReducedMotion.current
						? { opacity: 0 }
						: { opacity: 0, x: -8, scale: 0.96 }}
					animate={{
						opacity: 1,
						x: 0,
						scale: 1,
						transition: prefersReducedMotion.current
							? { duration: 0.15 }
							: { type: "spring", visualDuration: 0.25, bounce: 0, delay: 0.1 }
					}}
					exit={{
						opacity: 0,
						x: prefersReducedMotion.current ? 0 : -4,
						scale: prefersReducedMotion.current ? 1 : 0.98,
						transition: { duration: 0.12, ease: [0.32, 0.72, 0, 1] }
					}}
				>
					<Sidebar.Trigger size="icon-sm" class="rounded-lg text-muted-foreground" />
				</motion.div>
			{/if}
		</AnimatePresence>
		<SiteToolbar />
		<div id="main">
			{@render children()}
		</div>
		<SiteFooter />
	</Sidebar.Inset>
</Sidebar.Provider>
