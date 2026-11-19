<script lang="ts">
	import {
		Avatar,
		AvatarFallback,
		AvatarImage
	} from "#lib/components/ui/avatar/index.js";
	import { FieldSeparator } from "#lib/components/ui/field/index.js";
	import { Input } from "#lib/components/ui/input/index.js";
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
		const input = event.currentTarget as HTMLInputElement;
		const file = input.files?.[0];

		if (file) avatarSrc = URL.createObjectURL(file);
	}
</script>

<SettingsSection description="How you appear to teammates." title="Profile">
	<SettingField
		description="Used in comments, invoices, and the sidebar."
		htmlFor="avatar"
		label="Avatar"
	>
		<div class="flex flex-1 items-center justify-center">
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
				<Avatar class="size-12 hover:opacity-50">
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
		<Input autocomplete="name" id="display-name" value="Shaban Haider" />
	</SettingField>
	<FieldSeparator />
	<SettingField
		description="Sign-in and billing receipts go here."
		htmlFor="email"
		label="Email"
	>
		<Input autocomplete="email" id="email" type="email" value="shaban@efferd.com" />
	</SettingField>
</SettingsSection>
