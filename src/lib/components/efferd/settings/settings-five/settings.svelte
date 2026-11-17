<script lang="ts">
	import DangerZoneSettings from "./danger-zone-settings.svelte";
	import LocalizationSettings from "./localization-settings.svelte";
	import ProfileInformation from "./profile-information.svelte";
	import SecurityInformation from "./security-information.svelte";
	import SettingsHeader from "./settings-header.svelte";
</script>

<div class="flex flex-col gap-8">
	<SettingsHeader />
	<ProfileInformation />
	<SecurityInformation />
	<LocalizationSettings />
	<DangerZoneSettings />
</div>
