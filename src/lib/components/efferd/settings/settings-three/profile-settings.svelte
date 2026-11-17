<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from "#lib/components/ui/avatar/index.js";
	import { Button, buttonVariants } from "#lib/components/ui/button/index.js";
	import { CardContent, CardFooter } from "#lib/components/ui/card/index.js";
	import { FieldGroup, FieldSeparator } from "#lib/components/ui/field/index.js";
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
		const file = (event.currentTarget as HTMLInputElement).files?.[0];
		if (file) avatarSrc = URL.createObjectURL(file);
	}
</script>

<SettingsSection description="How you appear to teammates and customers." title="Profile">
	<CardContent class="flex-1 px-0 py-(--card-spacing)">
		<FieldGroup class="gap-5">
			<SettingField
				class="[&>[data-slot=field-content]:last-child]:w-full"
				description="Click to upload a square image, at least 256px."
				htmlFor="avatar"
				label="Your Avatar"
				orientation="horizontal"
			>
				<div class="flex w-full items-center justify-between gap-4">
					<Avatar class="size-16">
						<AvatarImage alt="" src={avatarSrc} />
						<AvatarFallback>SH</AvatarFallback>
					</Avatar>
					<div class="flex items-center">
						<Button
							class="text-destructive"
							disabled={!avatarSrc}
							onclick={() => (avatarSrc = "")}
							type="button"
							variant="link"
						>
							Delete
						</Button>
						<label class={buttonVariants({ variant: "link" })} for="avatar">
							Update
							<input
								accept="image/*"
								class="sr-only"
								id="avatar"
								onchange={updateAvatar}
								type="file"
							/>
						</label>
					</div>
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
				label="Primary Email"
			>
				<Input autocomplete="email" id="email" type="email" value="shaban@efferd.com" />
			</SettingField>
		</FieldGroup>
	</CardContent>
	<CardFooter class="justify-end gap-2 border-t">
		<Button type="button" variant="ghost">Cancel</Button>
		<Button type="button">Save changes</Button>
	</CardFooter>
</SettingsSection>
