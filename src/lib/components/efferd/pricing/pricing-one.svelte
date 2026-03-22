<script lang="ts">
	import { ShieldCheck } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import { DecorIcon } from "$lib/components/ui/decor-icon";
	import { cn } from "$lib/utils";

	type Plan = {
		name: string;
		description: string;
		originalPrice: string;
		discount: string;
		price: string;
		cta: string;
		featured?: boolean;
	};

	const plans: Plan[] = [
		{
			name: "Monthly",
			description: "Best value for growing businesses!",
			originalPrice: "$8.99",
			discount: "11% off",
			price: "7.99",
			cta: "Start Your Journey"
		},
		{
			name: "Yearly",
			description: "Unlock savings with an annual commitment!",
			originalPrice: "$8.99",
			discount: "22% off",
			price: "6.99",
			cta: "Get Started Now",
			featured: true
		}
	];
</script>

<section class="w-full space-y-5">
	<div class="mx-auto max-w-lg">
		<div class="flex justify-center">
			<div class="rounded-md border px-4 py-1 text-sm">Pricing</div>
		</div>

		<h2 class="mt-4 text-center text-2xl font-bold tracking-tight md:text-3xl">
			Pricing Based on Your Success
		</h2>

		<p class="mt-2 text-center text-sm text-muted-foreground md:text-base">
			We offer a single price for all our services. We believe that pricing is a critical
			component of any successful business.
		</p>
	</div>

	<div class="mx-auto w-full max-w-2xl space-y-2">
		<div class="relative grid border bg-background p-4 shadow-xs md:grid-cols-2">
			<DecorIcon class="size-3" position="top-left" />
			<DecorIcon class="size-3" position="top-right" />
			<DecorIcon class="size-3" position="bottom-left" />
			<DecorIcon class="size-3" position="bottom-right" />

			{#each plans as plan}
				<div
					class={cn(
						"w-full",
						plan.featured
							? "relative rounded-md border bg-card p-4 shadow dark:bg-card/80"
							: "px-4 pt-5 pb-4"
					)}
				>
					<div class="space-y-1">
						<div class="flex items-center justify-between gap-3">
							<h3 class="leading-none font-semibold">{plan.name}</h3>

							<div class="flex items-center gap-x-1">
								<span class="text-sm text-muted-foreground line-through">
									{plan.originalPrice}
								</span>
								<span
									class={cn(
										"inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
										plan.featured
											? "bg-primary text-primary-foreground shadow-xs"
											: "bg-secondary text-secondary-foreground"
									)}
								>
									{plan.discount}
								</span>
							</div>
						</div>

						<p class="text-sm text-muted-foreground">{plan.description}</p>
					</div>

					<div class="mt-10 space-y-4">
						<div class="flex items-end gap-0.5 text-xl text-muted-foreground">
							<span>$</span>
							<span
								class="-mb-0.5 text-4xl font-extrabold tracking-tighter text-foreground"
							>
								{plan.price}
							</span>
							<span>/month</span>
						</div>

						<Button
							class="w-full"
							href="#"
							variant={plan.featured ? "default" : "outline"}
						>
							{plan.cta}
						</Button>
					</div>
				</div>
			{/each}
		</div>

		<div class="flex items-center justify-center gap-x-2 text-sm text-muted-foreground">
			<ShieldCheck class="size-4" />
			<span>Access to all features with no hidden fees</span>
		</div>
	</div>
</section>
