<script lang="ts">
	import { FieldSeparator } from "#lib/components/ui/field/index.js";
	import { Switch } from "#lib/components/ui/switch/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	const notifications = [
		{
			id: "product-updates",
			label: "Product updates",
			description: "New features and release notes.",
			defaultChecked: true
		},
		{
			id: "weekly-digest",
			label: "Weekly digest",
			description: "A Monday summary of activity.",
			defaultChecked: true
		},
		{
			id: "mentions",
			label: "Mentions",
			description: "When someone @mentions you.",
			defaultChecked: true
		},
		{
			id: "billing-alerts",
			label: "Billing alerts",
			description: "Failed payments and renewals.",
			defaultChecked: false
		}
	] as const;
</script>

<SettingsSection description="Choose what we email you." title="Notifications">
	{#each notifications as item, index (item.id)}
		{#if index > 0}<FieldSeparator />{/if}
		<SettingField
			description={item.description}
			htmlFor={item.id}
			label={item.label}
			orientation="horizontal"
		>
			<Switch checked={item.defaultChecked} id={item.id} />
		</SettingField>
	{/each}
</SettingsSection>
