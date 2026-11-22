<script lang="ts">
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import ListChecksIcon from "@lucide/svelte/icons/list-checks";
	import SendIcon from "@lucide/svelte/icons/send";
	import * as Avatar from "#lib/components/ui/avatar/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.js";
	import StatusIndicator from "./status-indicator.svelte";

	type Teammate = {
		id: string;
		name: string;
		status: "Online" | "Away";
		open: number;
		image: string;
	};
	let teammates = $state<Teammate[]>([
		{
			id: "amelia",
			name: "Amelia Park",
			status: "Online",
			open: 9,
			image: "https://avatar.vercel.sh/ameliapark"
		},
		{
			id: "noah",
			name: "Noah Ibarra",
			status: "Online",
			open: 7,
			image: "https://avatar.vercel.sh/noahi"
		},
		{
			id: "priya",
			name: "Priya Desai",
			status: "Away",
			open: 4,
			image: "https://avatar.vercel.sh/priyadesai"
		},
		{
			id: "marcus",
			name: "Marcus Chen",
			status: "Online",
			open: 11,
			image: "https://avatar.vercel.sh/marcuschen"
		},
		{
			id: "emily",
			name: "Emily Johnson",
			status: "Away",
			open: 2,
			image: "https://avatar.vercel.sh/emilyjohnson"
		}
	]);

	function initials(name: string) {
		return name
			.split(" ")
			.map((word) => word[0]?.toUpperCase())
			.join("");
	}
	function pullNext(id: string) {
		teammates = teammates.map((teammate) =>
			teammate.id === id ? { ...teammate, open: Math.max(0, teammate.open - 1) } : teammate
		);
	}
</script>

<Card.Root class="shadow-none dark:ring-0">
	<Card.Header class="border-b">
		<Card.Title>Team on duty</Card.Title>
		<Card.Description>Who is carrying the queue right now</Card.Description>
	</Card.Header>
	<Card.Content class="p-0">
		<ul class="flex flex-col divide-y divide-border">
			{#each teammates as teammate (teammate.id)}
				<li class="flex items-center gap-2 p-3 sm:gap-3">
					<Avatar.Root class="size-8">
						<Avatar.Image src={teammate.image} alt={teammate.name} />
						<Avatar.Fallback>{initials(teammate.name)}</Avatar.Fallback>
					</Avatar.Root>
					<div class="min-w-0 flex-1 pr-1">
						<p class="truncate text-sm leading-snug font-medium">{teammate.name}</p>
						<p class="flex items-center gap-2 text-[10px] leading-snug">
							<span class="flex shrink-0 items-center gap-1">
								<StatusIndicator
									color={teammate.status === "Online" ? "emerald" : "amber"}
									pulse={teammate.status === "Online"}
								/>
								{teammate.status}
							</span>
							<span class="size-1 rounded-full bg-foreground/80"></span>
							<span class="tabular-nums">{teammate.open} assigned</span>
						</p>
					</div>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							{#snippet child({ props })}
								<Button
									{...props}
									aria-label={`Actions for ${teammate.name}`}
									size="icon-xs"
									variant="ghost"><EllipsisIcon /></Button
								>
							{/snippet}
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end" class="min-w-52">
							<DropdownMenu.Label class="text-xs font-normal text-muted-foreground"
								>{teammate.name}</DropdownMenu.Label
							>
							<DropdownMenu.Separator />
							<DropdownMenu.Group>
								<DropdownMenu.Item><SendIcon />Message</DropdownMenu.Item>
								<DropdownMenu.Item
									disabled={teammate.open === 0}
									onSelect={() => pullNext(teammate.id)}
									><ListChecksIcon />Pull next conversation</DropdownMenu.Item
								>
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
