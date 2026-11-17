<script lang="ts">
	import {
		AlertDialog,
		AlertDialogAction,
		AlertDialogCancel,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogTrigger
	} from "#lib/components/ui/alert-dialog/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import { CardContent } from "#lib/components/ui/card/index.js";
	import { FieldGroup, FieldSeparator } from "#lib/components/ui/field/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection
	class="lg:col-span-4"
	description="Irreversible and destructive actions."
	title="Danger zone"
>
	<CardContent class="flex-1 px-0 py-(--card-spacing)">
		<FieldGroup class="gap-5">
			<SettingField
				description="End every signed-in session except this one."
				htmlFor="sign-out-sessions"
				label="Sessions"
				orientation="horizontal"
			>
				<Button id="sign-out-sessions" size="sm" type="button" variant="outline"
					>Sign out all</Button
				>
			</SettingField>
			<FieldSeparator />
			<SettingField
				description="Remove your account and assigned threads."
				htmlFor="delete-account"
				label="Delete account"
				orientation="horizontal"
			>
				<AlertDialog>
					<AlertDialogTrigger>
						{#snippet child({ props })}
							<Button
								{...props}
								id="delete-account"
								size="sm"
								type="button"
								variant="destructive"
							>
								Delete
							</Button>
						{/snippet}
					</AlertDialogTrigger>
					<AlertDialogContent size="sm">
						<AlertDialogHeader>
							<AlertDialogTitle>Delete your account?</AlertDialogTitle>
							<AlertDialogDescription>
								This permanently removes your profile, open conversations assigned
								to you, and notification preferences. This cannot be undone.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction variant="destructive"
								>Delete account</AlertDialogAction
							>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</SettingField>
		</FieldGroup>
	</CardContent>
</SettingsSection>
