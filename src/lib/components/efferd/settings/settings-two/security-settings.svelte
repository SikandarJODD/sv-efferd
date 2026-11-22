<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { FieldSeparator } from "#lib/components/ui/field/index.js";
	import { Switch } from "#lib/components/ui/switch/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection description="Keep your account safe." title="Security">
	<SettingField
		description="Require a code when signing in."
		htmlFor="two-factor"
		label="Two-factor auth"
		orientation="horizontal"
	>
		<Switch checked id="two-factor" />
	</SettingField>
	<FieldSeparator />
	<SettingField
		description="Last changed 3 months ago."
		htmlFor="change-password"
		label="Password"
		orientation="horizontal"
	>
		<Button id="change-password" size="sm" type="button" variant="outline">Change</Button>
	</SettingField>
	<FieldSeparator />
	<SettingField
		description="Signed in on 3 devices."
		htmlFor="sign-out-sessions"
		label="Sessions"
		orientation="horizontal"
	>
		<Button id="sign-out-sessions" size="sm" type="button" variant="outline"
			>Sign out all</Button
		>
	</SettingField>
</SettingsSection>
