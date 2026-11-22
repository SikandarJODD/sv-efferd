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

<section
	aria-labelledby="team-two-heading"
	class="mx-auto flex h-screen w-full max-w-5xl flex-col justify-center border-x"
>
	<div class="flex flex-col gap-2 px-4 py-8 md:px-6 md:py-12">
		<h2
			class="font-heading text-3xl font-medium text-balance md:text-4xl"
			id="team-two-heading"
		>
			Meet the team
		</h2>
		<p class="max-w-lg text-sm text-pretty text-muted-foreground md:text-base">
			The people who design, ship, and obsess over every Efferd block.
		</p>
	</div>

	<div class="relative">
		<FullWidthDivider position="top" />
		<ul class="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
			{#each team as member (member.name)}
				<li class="flex items-center gap-3 bg-background p-4 md:p-6">
					<Avatar class="size-12 rounded-sm shadow-sm *:rounded-sm after:rounded-sm">
						<AvatarImage alt={`${member.name}'s portrait`} src={member.image} />
						<AvatarFallback>{getInitials(member.name)}</AvatarFallback>
					</Avatar>
					<div class="flex min-w-0 flex-col gap-0.5">
						<h3 class="font-heading truncate font-medium text-foreground">
							{member.name}
						</h3>
						<p class="text-sm text-muted-foreground">{member.role}</p>
					</div>
					<div class="ms-auto flex h-full shrink-0 items-end gap-0.5">
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
				</li>
			{/each}
		</ul>
		<FullWidthDivider position="bottom" />
	</div>

	<div
		class="relative flex flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center md:px-6"
	>
		<FullWidthDivider position="bottom" />
		<div class="flex flex-col gap-1">
			<p class="font-medium text-foreground">Want to join us?</p>
			<p class="text-sm text-pretty text-muted-foreground">
				We're always looking for people who care about craft.
			</p>
		</div>
		<Button href="#careers" variant="outline">View openings</Button>
	</div>
</section>
