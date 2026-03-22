<script lang="ts">
	import { Briefcase, Building, Users, type Icon as IconType } from "@lucide/svelte";
	import PricingCard from "$lib/components/efferd/pricing/pricing-card.svelte";
	import { cn } from "$lib/utils";
	import type { Component } from "svelte";

	type Plan = {
		icon: typeof IconType | Component;
		description: string;
		name: string;
		price: string;
		variant: "outline" | "default";
		features: string[];
		badge?: string;
		original?: string;
		period?: string;
		href?: string;
	};

	const plans: Plan[] = [
		{
			icon: Users,
			description: "Perfect for individuals",
			name: "Basic",
			price: "Free",
			variant: "outline",
			features: [
				"Automated Meeting Scheduling",
				"Basic Calendar Sync",
				"Daily Schedule Overview",
				"Email Reminders",
				"Task Management",
				"24/7 Customer Support",
				"Single User Access",
				"Basic Reporting",
				"Mobile App Access"
			]
		},
		{
			icon: Briefcase,
			description: "Ideal for small teams",
			name: "Pro",
			badge: "Popular",
			price: "$29",
			original: "$39",
			period: "/month",
			variant: "default",
			features: [
				"All Basic Plan Features",
				"Advanced Calendar Integrations",
				"Customizable Notifications",
				"Priority Support",
				"Analytics and Insights",
				"Group Scheduling",
				"Multiple User Roles",
				"Advanced Reporting",
				"Custom Branding Options"
			]
		},
		{
			icon: Building,
			name: "Enterprise",
			description: "Perfect for large scale companies",
			price: "$99",
			original: "$129",
			period: "/month",
			variant: "outline",
			features: [
				"All Pro Plan Features",
				"Dedicated Account Manager",
				"Custom Integrations",
				"Advanced Security Features",
				"Team Collaboration Tools",
				"Onboarding and Training",
				"Unlimited Users",
				"API Access with Higher Limits",
				"Advanced Audit Logs"
			]
		}
	];
</script>

<section class="w-full">
	<div class="mx-auto mb-4 max-w-md space-y-2">
		<div class="flex justify-center">
			<div class="rounded-md border px-4 py-1 text-sm">Pricing</div>
		</div>

		<h2
			class="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl lg:font-extrabold"
		>
			Plans that Scale with You
		</h2>

		<p class="text-center text-sm text-muted-foreground md:text-base">
			Whether you&apos;re just starting out or growing fast, our flexible pricing has you
			covered.
		</p>
	</div>

	<div class="mx-auto grid w-full max-w-4xl gap-4 p-6 md:grid-cols-3">
		{#each plans as plan, index}
			<PricingCard
				class={cn("w-full max-w-full", index === 1 && "md:scale-105")}
				icon={plan.icon}
				name={plan.name}
				price={plan.price}
				description={plan.description}
				features={plan.features}
				period={plan.period}
				original={plan.original}
				badge={plan.badge}
				buttonVariant={plan.variant}
				featured={index === 1}
				href={plan.href}
			/>
		{/each}
	</div>
</section>
