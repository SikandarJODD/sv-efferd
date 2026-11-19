<script lang="ts">
	import AtSignIcon from "@lucide/svelte/icons/at-sign";
	import { Button } from "#lib/components/ui/button/index.js";
	import {
		InputGroup,
		InputGroupAddon,
		InputGroupInput
	} from "#lib/components/ui/input-group/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection hint="We'll send a confirmation link before this address updates.">
	{#snippet action()}<Button type="button">Save Changes</Button>{/snippet}
	<SettingField
		description="Used to log in and receive notifications. Confirmation required for changes."
		htmlFor="email"
		label="Your Email"
	>
		<InputGroup>
			<InputGroupAddon><AtSignIcon aria-hidden="true" /></InputGroupAddon>
			<InputGroupInput
				aria-describedby="email-hint"
				autocomplete="email"
				id="email"
				type="email"
				value="shaban@efferd.com"
			/>
		</InputGroup>
	</SettingField>
</SettingsSection>
