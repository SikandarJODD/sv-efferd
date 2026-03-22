<script lang="ts">
	import LogoCloudTwo from "$lib/components/efferd/logo-cloud/two/logo-cloud-two.svelte";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
</script>

<section class="mb-12">
	<h2
		class="py-6 text-center text-lg font-medium tracking-tight text-muted-foreground md:text-xl"
	>
		Trusted by <span class="text-foreground">experts</span>
	</h2>
	<div class="relative *:border-0">
		<DecorIcon class="size-4" position="top-left" />
		<DecorIcon class="size-4" position="top-right" />
		<DecorIcon class="size-4" position="bottom-left" />
		<DecorIcon class="size-4" position="bottom-right" />

		<FullWidthDivider class="-top-px" />
		<LogoCloudTwo />
		<FullWidthDivider class="-bottom-px" />
	</div>
</section>
