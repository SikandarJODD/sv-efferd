<script lang="ts">
	import AgentPreview from "./agent-preview.svelte";
	import AvailabilitySettings from "./availability-settings.svelte";
	import DangerSettings from "./danger-settings.svelte";
	import NotificationSettings from "./notification-settings.svelte";
	import ProfileSettings from "./profile-settings.svelte";
</script>

<div class="flex w-full flex-col gap-4">
	<div class="grid w-full gap-4 lg:grid-cols-2 xl:grid-cols-[.3fr_1fr]">
		<AgentPreview />
		<ProfileSettings />
	</div>
	<div class="grid w-full gap-4 xl:grid-cols-2">
		<AvailabilitySettings />
		<NotificationSettings />
	</div>
	<DangerSettings />
</div>
