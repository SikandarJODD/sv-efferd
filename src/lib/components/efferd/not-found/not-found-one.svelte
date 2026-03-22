<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import * as Empty from "$lib/components/ui/empty/index";
	import { Button } from "$lib/components/ui/button";
	import { CompassIcon, HomeIcon } from "@lucide/svelte";
</script>

<div class="flex w-full items-center justify-center overflow-hidden">
	<div class="flex h-screen items-center border-x">
		<div>
			<FullWidthDivider />
			<Empty.Root>
				<Empty.Header>
					<Empty.Title class="font-mono text-8xl font-black">404</Empty.Title>
					<Empty.Description class="text-nowrap">
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
							<CompassIcon data-icon="inline-start" />
							Explore
						</Button>
					</div>
				</Empty.Content>
			</Empty.Root>
			<FullWidthDivider />
		</div>
	</div>
</div>
