<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import AppearanceSettings from "./appearance-settings.svelte";
	import DangerSettings from "./danger-settings.svelte";
	import NotificationSettings from "./notification-settings.svelte";
	import ProfileSettings from "./profile-settings.svelte";
	import SecuritySettings from "./security-settings.svelte";
</script>

<div class="overflow-hidden border">
	<div class="grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
		<ProfileSettings />
		<NotificationSettings />
		<AppearanceSettings />
		<SecuritySettings />
		<DangerSettings />
		<div
			class="flex flex-col gap-3 bg-background px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:col-span-3"
		>
			<p class="text-sm text-muted-foreground">Changes apply to your account only.</p>
			<div class="flex gap-2">
				<Button type="button" variant="outline">Cancel</Button>
				<Button type="button">Save changes</Button>
			</div>
		</div>
	</div>
</div>
