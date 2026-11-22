<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import { FullWidthDivider } from "#lib/components/ui/full-width-divider/index.js";
	import Github from "#lib/components/svgs/github.svelte";
	import Linkedin from "#lib/components/svgs/linkedin.svelte";
	import X from "#lib/components/svgs/x.svelte";

	type SocialLabel = "X" | "GitHub" | "LinkedIn";

	type Social = {
		label: SocialLabel;
		href: string;
	};

	type TeamMember = {
		name: string;
		role: string;
		image: string;
		socials: Social[];
	};

	const socialIcons = {
		X,
		GitHub: Github,
		LinkedIn: Linkedin
	};

	const team: TeamMember[] = [
		{
			name: "Bhide Svelte",
			role: "Founder & CEO",
			image: "https://github.com/SikandarJODD.png",
			socials: [
				{ label: "X", href: "#" },
				{ label: "GitHub", href: "#" },
				{ label: "LinkedIn", href: "#" }
			]
		},
		{
			name: "Jordan Blake",
			role: "Head of Product",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
			socials: [
				{ label: "X", href: "#" },
				{ label: "GitHub", href: "#" }
			]
		},
		{
			name: "Priya Nair",
			role: "Design Lead",
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
			socials: [
				{ label: "X", href: "#" },
				{ label: "LinkedIn", href: "#" }
			]
		},
		{
			name: "Alex Rivera",
			role: "Engineering",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
			socials: [
				{ label: "X", href: "#" },
				{ label: "GitHub", href: "#" }
			]
		},
		{
			name: "Sam Okonkwo",
			role: "Growth",
			image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
			socials: [
				{ label: "X", href: "#" },
				{ label: "LinkedIn", href: "#" }
			]
		},
		{
			name: "Leo Park",
			role: "Developer Experience",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
			socials: [
				{ label: "X", href: "#" },
				{ label: "GitHub", href: "#" }
			]
		}
	];

	function getInitials(name: string): string {
		return name
			.split(" ")
			.map((part) => part[0])
			.join("")
			.slice(0, 2)
			.toUpperCase();
	}
</script>

<section aria-labelledby="team-three-heading" class="mx-auto w-full max-w-5xl border-x py-4">
	<div class="flex flex-col gap-2 px-4 py-8 md:px-6 md:py-12">
		<h2
			class="font-heading text-3xl font-medium text-balance md:text-4xl"
			id="team-three-heading"
		>
			Meet the <span class="font-serif italic">people</span>
		</h2>
		<p class="max-w-lg text-sm text-pretty text-muted-foreground md:text-base">
			The humans who design, ship, and obsess over every Efferd block.
		</p>
	</div>

	<div class="relative">
		<FullWidthDivider position="top" />
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-border sm:block lg:hidden"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px bg-border lg:block"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px bg-border lg:block"
		></div>

		<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{#each team as member (member.name)}
				<li class="flex flex-col items-center gap-5 px-6 py-10 text-center md:py-14">
					<Avatar class="size-20 md:size-24">
						<AvatarImage alt={`${member.name}'s portrait`} src={member.image} />
						<AvatarFallback>{getInitials(member.name)}</AvatarFallback>
					</Avatar>
					<div class="flex flex-col items-center gap-1">
						<h3 class="font-heading font-medium text-foreground">{member.name}</h3>
						<p class="text-sm text-pretty text-muted-foreground">{member.role}</p>
						<div class="mt-1 flex">
							{#each member.socials as social (social.label)}
								{@const Icon = socialIcons[social.label]}
								<Button
									aria-label={`${member.name} on ${social.label}`}
									class="text-muted-foreground"
									href={social.href}
									size="icon-xs"
									variant="ghost"
								>
									<Icon />
								</Button>
							{/each}
						</div>
					</div>
				</li>
			{/each}
		</ul>
		<FullWidthDivider position="bottom" />
	</div>

	<div
		class="relative flex flex-col items-start justify-between gap-4 px-4 py-6 md:flex-row md:items-center md:px-6"
	>
		<FullWidthDivider position="bottom" />
		<p class="text-lg text-pretty text-muted-foreground">
			<span class="font-medium text-foreground">Join us!</span> Let's shape the future of the web
			together
		</p>
		<Button href="/" variant="outline">View openings</Button>
	</div>
</section>
