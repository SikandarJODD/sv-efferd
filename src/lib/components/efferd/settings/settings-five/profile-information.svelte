<script lang="ts">
	import PencilIcon from "@lucide/svelte/icons/pencil";
	import UserIcon from "@lucide/svelte/icons/user";
	import { Button } from "#lib/components/ui/button/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection variant="group">
	<SettingsSection variant="group-title">
		<UserIcon aria-hidden="true" />
		Profile information
	</SettingsSection>
	<SettingsSection variant="panel">
		<div class="flex items-center gap-4">
			<SettingsSection variant="panel-title">Basic information</SettingsSection>
			<Button class="text-muted-foreground" size="sm" type="button" variant="ghost">
				<PencilIcon aria-hidden="true" />
				Edit
			</Button>
		</div>
		<div class="grid gap-6 sm:grid-cols-2">
			<SettingField label="Full name"
				><span class="truncate text-sm">Shaban Haider</span></SettingField
			>
			<SettingField label="Primary email">
				<span class="truncate text-sm">shaban@efferd.com</span>
			</SettingField>
		</div>
	</SettingsSection>
</SettingsSection>
