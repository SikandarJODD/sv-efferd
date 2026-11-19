<script lang="ts">
	import * as Avatar from "#lib/components/ui/avatar/index.js";
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.js";
	import {
		BellIcon,
		BookOpenIcon,
		CommandIcon,
		CreditCardIcon,
		LifeBuoyIcon,
		LogOutIcon,
		UserIcon
	} from "@lucide/svelte";

	const user = {
		name: "Shaban Haider",
		email: "shaban@efferd.com",
		avatar: "https://github.com/shabanhr.png"
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger aria-label="Open account menu" class="flex size-9 items-center justify-center rounded-full">
		<Avatar.Root class="size-8">
			<Avatar.Image src={user.avatar} alt={user.name} />
			<Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
		</Avatar.Root>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="w-60">
		<DropdownMenu.Group>
			<DropdownMenu.Label class="pointer-events-none flex items-center gap-2">
				<Avatar.Root class="isolate size-8">
					<Avatar.Image src={user.avatar} alt={user.name} />
					<Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
				</Avatar.Root>
				<div><span class="font-medium text-foreground">{user.name}</span><br /><div class="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs text-muted-foreground">{user.email}</div></div>
			</DropdownMenu.Label>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group><DropdownMenu.Item><UserIcon />Profile</DropdownMenu.Item></DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item><BellIcon />Notifications</DropdownMenu.Item>
			<DropdownMenu.Item><CommandIcon />Keyboard shortcuts</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item><LifeBuoyIcon />Seller help</DropdownMenu.Item>
			<DropdownMenu.Item><BookOpenIcon />Seller guides</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group><DropdownMenu.Item><CreditCardIcon />Plan &amp; billing</DropdownMenu.Item></DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Group><DropdownMenu.Item variant="destructive"><LogOutIcon />Log out</DropdownMenu.Item></DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
