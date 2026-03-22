<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import * as Empty from "$lib/components/ui/empty/index";
	import { Button } from "$lib/components/ui/button";
	import { CompassIcon, HomeIcon } from "@lucide/svelte";
</script>

<div class="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
	<Empty.Root>
		<Empty.Header>
			<Empty.Title class="mask-b-from-20% mask-b-to-80% text-9xl font-extrabold"
				>404</Empty.Title
			>
			<Empty.Description class="-mt-8 text-nowrap text-foreground/80">
				The page you're looking for might have been <br />
				moved or doesn't exist.
			</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<div class="flex gap-2">
				<Button href="/">
					<HomeIcon data-icon="inline-start" />
					Go Home
				</Button>

				<Button href="/" variant="outline">
					<CompassIcon data-icon="inline-start" />{" "}
					Explore
				</Button>
			</div>
		</Empty.Content>
	</Empty.Root>
</div>
