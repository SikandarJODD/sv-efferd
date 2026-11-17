<script lang="ts">
	import MoonStarIcon from "@lucide/svelte/icons/moon-star";
	import MonitorCogIcon from "@lucide/svelte/icons/monitor-cog";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { FieldSeparator } from "#lib/components/ui/field/index.js";
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger,
		SelectValue
	} from "#lib/components/ui/select/index.js";
	import { Switch } from "#lib/components/ui/switch/index.js";
	import { ToggleGroup, ToggleGroupItem } from "#lib/components/ui/toggle-group/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	const themeOptions = [
		{ value: "light", label: "Light", icon: SunIcon },
		{ value: "dark", label: "Dark", icon: MoonStarIcon },
		{ value: "system", label: "System", icon: MonitorCogIcon }
	] as const;

	const languages = [
		{ value: "en", label: "English" },
		{ value: "de", label: "Deutsch" },
		{ value: "fr", label: "Français" },
		{ value: "ja", label: "日本語" }
	] as const;

	let theme = $state("system");
	let language = $state("en");
</script>

<SettingsSection description="Customize how Efferd looks for you." title="Appearance">
	<SettingField description="Match your system or pick one." htmlFor="theme" label="Theme">
		<ToggleGroup
			aria-label="Theme"
			bind:value={theme}
			id="theme"
			type="single"
			variant="outline"
		>
			{#each themeOptions as option (option.value)}
				{@const Icon = option.icon}
				<ToggleGroupItem value={option.value}>
					<span class="flex items-center gap-1.5">
						<Icon aria-hidden="true" class="text-muted-foreground" />
						{option.label}
					</span>
				</ToggleGroupItem>
			{/each}
		</ToggleGroup>
	</SettingField>
	<FieldSeparator />
	<SettingField description="Used across the interface." htmlFor="language" label="Language">
		<Select bind:value={language}>
			<SelectTrigger id="language">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Languages</SelectLabel>
					{#each languages as item (item.value)}
						<SelectItem label={item.label} value={item.value}>{item.label}</SelectItem>
					{/each}
				</SelectGroup>
			</SelectContent>
		</Select>
	</SettingField>
	<FieldSeparator />
	<SettingField
		description="Tighter spacing in tables and lists."
		htmlFor="compact-mode"
		label="Compact mode"
		orientation="horizontal"
	>
		<Switch id="compact-mode" />
	</SettingField>
</SettingsSection>
