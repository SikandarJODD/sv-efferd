<script lang="ts">
	import { FieldSeparator } from "#lib/components/ui/field/index.js";
	import { Switch } from "#lib/components/ui/switch/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection
	class="*:data-[slot=field-group]:gap-4"
	description="Choose what we email you."
	title="Notifications"
>
	<SettingField
		description="New features and release notes."
		htmlFor="product-updates"
		label="Product updates"
	>
		<div class="flex shrink-0">
			<Switch checked id="product-updates" />
		</div>
	</SettingField>
	<FieldSeparator />
	<SettingField
		description="A Monday summary of workspace activity."
		htmlFor="weekly-digest"
		label="Weekly digest"
	>
		<div class="flex shrink-0">
			<Switch checked id="weekly-digest" />
		</div>
	</SettingField>
</SettingsSection>
