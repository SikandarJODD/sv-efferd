<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	const defaultAvatarSrc = "https://github.com/shabanhr.png";
	let avatarSrc = $state(defaultAvatarSrc);

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

<SettingsSection
	hint="Square image recommended. Accepted file types: .png, .jpg, .webp, .avif. Max file size: 2MB."
>
	{#snippet action()}<Button type="button">Save Changes</Button>{/snippet}
	<SettingField
		description="This is your avatar image on your Efferd account. Click your avatar to upload a new image."
		htmlFor="avatar"
		label="Your Avatar"
	>
		<div class="flex items-center justify-center gap-2">
			<label class="cursor-pointer" for="avatar">
				<span class="sr-only">Upload a new avatar</span>
				<Avatar class="size-16">
					<AvatarImage alt="Shaban Haider" src={avatarSrc} />
					<AvatarFallback>SH</AvatarFallback>
				</Avatar>
				<input
					accept=".png,.jpg,.jpeg,.webp,.avif"
					aria-describedby="avatar-hint"
					class="sr-only"
					id="avatar"
					onchange={updateAvatar}
					type="file"
				/>
			</label>
		</div>
	</SettingField>
</SettingsSection>
