<script lang="ts">
	import { FullWidthDivider } from "$lib/components/ui/full-width-divider";
	import { cn } from "$lib/utils";
	import { Mail, MapPin, Phone } from "@lucide/svelte";

	const data = [
		{
			title: "Call Us Today!",
			value: "+1 (555) 123-4567",
			icon: Phone
		},
		{
			title: "Send an Email",
			value: "mail@example.com",
			icon: Mail
		},
		{
			title: "Visit Our Office",
			value: "100 Smith Street, VIC",
			icon: MapPin
		}
	];
</script>

<div class="mx-auto max-w-4xl">
	<h2 class="mb-6 text-lg font-medium md:text-2xl">Have Questions? Get in Touch!</h2>
	<div class="relative">
		<FullWidthDivider position="top"></FullWidthDivider>
		<div class="grid gap-px overflow-hidden bg-border px-px md:grid-cols-3">
			{#each data as item}
				{@const Icon = item.icon}
				<div class="flex items-center gap-3 bg-background p-2 shadow-xs">
					<div
						class={cn(
							"flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted/50",
							"[&_svg]:size-4 [&_svg]:text-muted-foreground"
						)}
					>
						<Icon />
					</div>
					<div class={cn("flex flex-col gap-y-0.5")}>
						<h2 class="text-sm">{item.title}</h2>
						<p class="text-xs text-muted-foreground">{item.value}</p>
					</div>
				</div>
			{/each}
		</div>
		<FullWidthDivider position="bottom"></FullWidthDivider>
	</div>
</div>
