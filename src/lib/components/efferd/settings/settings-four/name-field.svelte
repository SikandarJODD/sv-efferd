<script lang="ts">
	import UserIcon from "@lucide/svelte/icons/user";
	import { Button } from "#lib/components/ui/button/index.js";
	import {
		InputGroup,
		InputGroupAddon,
		InputGroupInput
	} from "#lib/components/ui/input-group/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection hint="Max 32 characters." hintId="display-name-hint">
	{#snippet action()}<Button type="button">Save Changes</Button>{/snippet}
	<SettingField
		description="This is your display name on Efferd."
		htmlFor="display-name"
		label="Your Name"
	>
		<InputGroup>
			<InputGroupAddon><UserIcon aria-hidden="true" /></InputGroupAddon>
			<InputGroupInput
				aria-describedby="display-name-hint"
				autocomplete="name"
				id="display-name"
				maxlength={32}
				value="Bhide Svelte"
			/>
		</InputGroup>
	</SettingField>
</SettingsSection>
