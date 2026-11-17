<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { FieldSeparator } from "#lib/components/ui/field/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection description="Irreversible and destructive actions." title="Danger zone">
	<SettingField
		description="Download a copy of your data."
		htmlFor="export-data"
		label="Export data"
		orientation="horizontal"
	>
		<Button id="export-data" size="sm" type="button" variant="outline">Export</Button>
	</SettingField>
	<FieldSeparator />
	<SettingField
		description="Remove your account and all its data."
		htmlFor="delete-account"
		label="Delete account"
		orientation="horizontal"
	>
		<Button id="delete-account" size="sm" type="button" variant="destructive">Delete</Button>
	</SettingField>
</SettingsSection>
