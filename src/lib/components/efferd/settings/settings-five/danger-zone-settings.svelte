<script lang="ts">
	import TriangleAlertIcon from "@lucide/svelte/icons/triangle-alert";
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
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection variant="group">
	<SettingsSection variant="group-title">
		<TriangleAlertIcon aria-hidden="true" />
		Danger zone
	</SettingsSection>
	<SettingsSection class="flex flex-col gap-6 pb-(--card-spacing)" variant="panel">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div class="flex min-w-0 flex-col gap-1">
				<span class="text-sm font-medium">Sign out everywhere</span>
				<p class="text-xs text-pretty text-muted-foreground">
					End every signed-in session except this one.
				</p>
			</div>
			<Button
				class="shrink-0"
				id="sign-out-sessions"
				size="sm"
				type="button"
				variant="outline"
			>
				Sign out all
			</Button>
		</div>
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div class="flex min-w-0 flex-col gap-1">
				<span class="text-sm font-medium">Delete account</span>
				<p class="text-xs text-pretty text-muted-foreground">
					Remove your account and all data. This cannot be undone.
				</p>
			</div>
			<AlertDialog>
				<AlertDialogTrigger>
					{#snippet child({ props })}
						<Button
							{...props}
							class="shrink-0"
							id="delete-account"
							size="sm"
							type="button"
							variant="destructive"
						>
							Delete account
						</Button>
					{/snippet}
				</AlertDialogTrigger>
				<AlertDialogContent size="sm">
					<AlertDialogHeader>
						<AlertDialogTitle>Delete your account?</AlertDialogTitle>
						<AlertDialogDescription>
							This permanently removes your profile, workspace access, and saved
							preferences. This action cannot be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction variant="destructive">Delete account</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	</SettingsSection>
</SettingsSection>
