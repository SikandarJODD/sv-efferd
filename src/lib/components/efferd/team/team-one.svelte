<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";
	import { Button } from "#lib/components/ui/button/index.js";

	type TeamMember = {
		name: string;
		role: string;
		image: string;
		link: string;
	};

	const team: TeamMember[] = [
		{
			name: "Bhide Svelte",
			role: "Founder & CEO",
			image: "https://github.com/SikandarJODD.png",
			link: "#"
		},
		{
			name: "Jordan Blake",
			role: "Head of Product",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
			link: "#"
		},
		{
			name: "Priya Nair",
			role: "Design Lead",
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
			link: "#"
		},
		{
			name: "Alex Rivera",
			role: "Engineering",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
			link: "#"
		},
		{
			name: "Sam Okonkwo",
			role: "Growth",
			image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
			link: "#"
		},
		{
			name: "Leo Park",
			role: "Developer Experience",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
			link: "#"
		},
		{
			name: "Elena Ross",
			role: "Brand",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
			link: "#"
		},
		{
			name: "Marcus Hale",
			role: "Support",
			image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
			link: "#"
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

<section aria-labelledby="team-one-heading" class="mx-auto flex w-full max-w-5xl flex-col gap-8">
	<h2 class="font-heading text-3xl font-medium text-balance md:text-4xl" id="team-one-heading">
		Our Incredible Team
	</h2>

	<div class="relative">
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-[linear-gradient(to_bottom,--theme(--color-foreground/.05)_0%,--theme(--color-foreground/.1)_2.5%,--theme(--color-foreground/.1)_97.5%,--theme(--color-foreground/.05)_100%)] sm:block"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-[linear-gradient(to_bottom,--theme(--color-foreground/.05)_0%,--theme(--color-foreground/.1)_2.5%,--theme(--color-foreground/.1)_97.5%,--theme(--color-foreground/.05)_100%)] lg:hidden"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px bg-[linear-gradient(to_bottom,--theme(--color-foreground/.05)_0%,--theme(--color-foreground/.1)_2.5%,--theme(--color-foreground/.1)_97.5%,--theme(--color-foreground/.05)_100%)] lg:block"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px bg-[linear-gradient(to_bottom,--theme(--color-foreground/.05)_0%,--theme(--color-foreground/.1)_2.5%,--theme(--color-foreground/.1)_97.5%,--theme(--color-foreground/.05)_100%)] lg:block"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-full hidden w-px bg-[linear-gradient(to_bottom,--theme(--color-foreground/.05)_0%,--theme(--color-foreground/.1)_2.5%,--theme(--color-foreground/.1)_97.5%,--theme(--color-foreground/.05)_100%)] sm:block"
		></div>

		<ul class="grid grid-cols-2 lg:grid-cols-3">
			{#each team as member (member.name)}
				<li>
					<a
						class="group flex flex-col items-center gap-4 px-6 py-8 text-center md:py-14"
						href={member.link}
					>
						<Avatar class="size-10 md:size-12">
							<AvatarImage
								alt={`${member.name}'s portrait`}
								class="grayscale group-hover:grayscale-0"
								src={member.image}
							/>
							<AvatarFallback>{getInitials(member.name)}</AvatarFallback>
						</Avatar>
						<div class="flex flex-col gap-0.5">
							<h3 class="font-heading font-medium text-foreground">{member.name}</h3>
							<p class="text-xs text-pretty text-muted-foreground">{member.role}</p>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
		<p class="text-lg text-pretty text-muted-foreground">
			<span class="font-medium text-foreground">Join us!</span> Let's shape the future of the web
			together
		</p>
		<Button class="w-full md:w-auto" href="#careers">View openings</Button>
	</div>
</section>
