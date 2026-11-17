<script lang="ts">
	import UserIcon from "@lucide/svelte/icons/user";
	import AtSignIcon from "@lucide/svelte/icons/at-sign";
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";
	import { FieldSeparator } from "#lib/components/ui/field/index.js";
	import {
		InputGroup,
		InputGroupAddon,
		InputGroupInput,
		InputGroupText
	} from "#lib/components/ui/input-group/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	const defaultSrc = "https://github.com/shabanhr.png";
	let avatarSrc = $state(defaultSrc);

	$effect(() => {
		if (!avatarSrc.startsWith("blob:")) return;

		const objectUrl = avatarSrc;
		return () => URL.revokeObjectURL(objectUrl);
	});

	function updateAvatar(event: Event) {
		const file = (event.currentTarget as HTMLInputElement).files?.[0];
		if (file) avatarSrc = URL.createObjectURL(file);
	}
</script>

<SettingsSection class="lg:col-span-2" description="How you appear to teammates." title="Profile">
	<SettingField
		description="Click to upload a square image, at least 256px."
		htmlFor="avatar"
		label="Avatar"
		orientation="horizontal"
	>
		<div class="flex shrink-0">
			<label
				class="group/avatar relative inline-flex cursor-pointer rounded-full outline-none focus-within:ring-3 focus-within:ring-ring/50"
			>
				<input
					accept="image/*"
					aria-label="Change photo"
					class="sr-only"
					id="avatar"
					onchange={updateAvatar}
					type="file"
				/>
				<Avatar class="size-12 transition-opacity hover:opacity-50">
					<AvatarImage alt="" src={avatarSrc} />
					<AvatarFallback>SH</AvatarFallback>
				</Avatar>
			</label>
		</div>
	</SettingField>
	<FieldSeparator />
	<SettingField
		description="Used in comments, invoices, and the sidebar."
		htmlFor="display-name"
		label="Display name"
	>
		<InputGroup>
			<InputGroupAddon>
				<UserIcon aria-hidden="true" class="size-4" />
			</InputGroupAddon>
			<InputGroupInput autocomplete="name" id="display-name" value="Shaban Haider" />
		</InputGroup>
	</SettingField>
	<FieldSeparator />
	<SettingField description="Sign-in and billing receipts go here." htmlFor="email" label="Email">
		<InputGroup>
			<InputGroupAddon>
				<AtSignIcon aria-hidden="true" class="size-4" />
			</InputGroupAddon>
			<InputGroupInput
				autocomplete="email"
				id="email"
				type="email"
				value="shaban@efferd.com"
			/>
		</InputGroup>
	</SettingField>
	<FieldSeparator />
	<SettingField description="Your public profile link." htmlFor="slug" label="Slug">
		<InputGroup>
			<InputGroupAddon>
				<InputGroupText>efferd.com/</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput autocomplete="off" id="slug" value="shaban" />
		</InputGroup>
	</SettingField>
</SettingsSection>
