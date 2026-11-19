<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import NotificationSettings from "./notification-settings.svelte";
	import ProfileSettings from "./profile-settings.svelte";
</script>

<div class="flex flex-1 flex-col gap-6">
	<ProfileSettings />
	<NotificationSettings />
	<div class="flex justify-end">
		<Button type="button">Save changes</Button>
	</div>
</div>
