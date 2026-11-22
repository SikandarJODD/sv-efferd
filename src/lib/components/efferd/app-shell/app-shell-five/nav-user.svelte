<script lang="ts">
	import * as Avatar from "#lib/components/ui/avatar/index.js";
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.js";
	import CreditCardIcon from "@lucide/svelte/icons/credit-card";
	import LogOutIcon from "@lucide/svelte/icons/log-out";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import UserIcon from "@lucide/svelte/icons/user";

	const user = {
		name: "Bhide Svelte",
		email: "email@example.com",
		avatar: "https://github.com/SikandarJODD.png"
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger aria-label="Open account menu">
		<Avatar.Root class="size-8"
			><Avatar.Image src={user.avatar} alt={user.name} /><Avatar.Fallback
				>{user.name.charAt(0)}</Avatar.Fallback
			></Avatar.Root
		>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="w-60">
		<DropdownMenu.Group
			><DropdownMenu.Label class="pointer-events-none flex items-center gap-2">
				<Avatar.Root class="isolate size-8"
					><Avatar.Image src={user.avatar} alt={user.name} /><Avatar.Fallback
						>{user.name.charAt(0)}</Avatar.Fallback
					></Avatar.Root
				>
				<div>
					<span class="font-medium text-foreground">{user.name}</span><br />
					<div
						class="max-w-full overflow-hidden text-xs text-ellipsis whitespace-nowrap text-muted-foreground"
					>
						{user.email}
					</div>
				</div>
			</DropdownMenu.Label></DropdownMenu.Group
		>
		<DropdownMenu.Separator />
		<DropdownMenu.Group
			><DropdownMenu.Item><UserIcon />Account</DropdownMenu.Item><DropdownMenu.Item
				><SettingsIcon />Settings</DropdownMenu.Item
			></DropdownMenu.Group
		>
		<DropdownMenu.Separator />
		<DropdownMenu.Group
			><DropdownMenu.Item><CreditCardIcon />Plan &amp; Billing</DropdownMenu.Item
			></DropdownMenu.Group
		>
		<DropdownMenu.Separator />
		<DropdownMenu.Group
			><DropdownMenu.Item variant="destructive"><LogOutIcon />Log out</DropdownMenu.Item
			></DropdownMenu.Group
		>
	</DropdownMenu.Content>
</DropdownMenu.Root>
