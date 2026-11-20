<script lang="ts">
	import * as Avatar from "#lib/components/ui/avatar/index.js";
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import {
		BellIcon,
		ChevronsUpDownIcon,
		CreditCardIcon,
		LifeBuoyIcon,
		LogOutIcon,
		SettingsIcon,
		SparklesIcon,
		UserIcon
	} from "@lucide/svelte";

	const user = {
		name: "Bhide Svelte",
		email: "email@example.com",
		avatar: "https://github.com/SikandarJODD.png"
	};
	const sidebar = Sidebar.useSidebar();
</script>

<Sidebar.Menu class="border-t p-2">
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton class="text-muted-foreground" {...props}>
						<Avatar.Root class="size-5">
							<Avatar.Image alt={user.name} src={user.avatar} />
							<Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
						</Avatar.Root>
						<span class="text-sm font-medium">{user.name.split(" ")[0]}</span>
						<ChevronsUpDownIcon class="ml-auto size-3!" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				align="end"
				class="min-w-48"
				side={sidebar.isMobile ? "bottom" : "right"}
				sideOffset={4}
			>
				<DropdownMenu.Group>
					<DropdownMenu.Item><SparklesIcon />Upgrade to Pro</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item><UserIcon />Profile</DropdownMenu.Item>
					<DropdownMenu.Item><BellIcon />Notifications</DropdownMenu.Item>
					<DropdownMenu.Item><CreditCardIcon />Billing</DropdownMenu.Item>
					<DropdownMenu.Item><SettingsIcon />Settings</DropdownMenu.Item>
					<DropdownMenu.Item><LifeBuoyIcon />Help Center</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item variant="destructive"><LogOutIcon />Log out</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
