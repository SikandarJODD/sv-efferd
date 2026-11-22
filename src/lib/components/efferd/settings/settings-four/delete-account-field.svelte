<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection>
	{#snippet action()}
		<Button id="delete-account" type="button" variant="destructive">Delete Account</Button>
	{/snippet}
	<SettingField
		description="Deletes your account and all data. This cannot be undone."
		htmlFor="delete-account"
		label="Delete Account"
	/>
</SettingsSection>
