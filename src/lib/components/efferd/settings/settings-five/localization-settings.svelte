<script lang="ts">
	import MapPinIcon from "@lucide/svelte/icons/map-pin";
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger,
		SelectValue
	} from "#lib/components/ui/select/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	let language = $state("en-us");
	let currency = $state("usd");
	let timezone = $state("asia-karachi");
	let dateFormat = $state("mm-dd-yyyy");
	let timeFormat = $state("12h");
</script>

<SettingsSection variant="group">
	<SettingsSection variant="group-title">
		<MapPinIcon aria-hidden="true" />
		Localization
	</SettingsSection>
	<SettingsSection class="flex flex-col gap-10" variant="panel">
		<div class="flex flex-col gap-4">
			<SettingsSection variant="panel-title">Language and Currency</SettingsSection>
			<div class="grid gap-4 sm:grid-cols-3">
				<SettingField htmlFor="language" label="Language" variant="select">
					<Select bind:value={language} type="single">
						<SelectTrigger class="w-full" id="language"><SelectValue /></SelectTrigger>
						<SelectContent>
							<SelectItem label="English – US" value="en-us">English – US</SelectItem>
							<SelectItem label="English – UK" value="en-gb">English – UK</SelectItem>
						</SelectContent>
					</Select>
				</SettingField>
				<SettingField htmlFor="currency" label="Currency" variant="select">
					<Select bind:value={currency} type="single">
						<SelectTrigger class="w-full" id="currency"><SelectValue /></SelectTrigger>
						<SelectContent>
							<SelectItem label="US Dollar $" value="usd">US Dollar $</SelectItem>
							<SelectItem label="Euro €" value="eur">Euro €</SelectItem>
						</SelectContent>
					</Select>
				</SettingField>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<SettingsSection variant="panel-title">Timezone and Date format</SettingsSection>
			<div class="grid gap-4 lg:grid-cols-3">
				<SettingField htmlFor="timezone" label="Timezone" variant="select">
					<Select bind:value={timezone} type="single">
						<SelectTrigger class="w-full" id="timezone"><SelectValue /></SelectTrigger>
						<SelectContent>
							<SelectItem
								label="Asia/Karachi (Pakistan Standard Time)"
								value="asia-karachi"
							>
								Asia/Karachi (Pakistan Standard Time)
							</SelectItem>
							<SelectItem
								label="America/New_York (Eastern Time)"
								value="america-new-york"
							>
								America/New_York (Eastern Time)
							</SelectItem>
						</SelectContent>
					</Select>
				</SettingField>
				<SettingField htmlFor="date-format" label="Date format" variant="select">
					<Select bind:value={dateFormat} type="single">
						<SelectTrigger class="w-full" id="date-format"
							><SelectValue /></SelectTrigger
						>
						<SelectContent>
							<SelectItem label="mm/dd/yyyy" value="mm-dd-yyyy">mm/dd/yyyy</SelectItem
							>
							<SelectItem label="dd/mm/yyyy" value="dd-mm-yyyy">dd/mm/yyyy</SelectItem
							>
						</SelectContent>
					</Select>
				</SettingField>
				<SettingField htmlFor="time-format" label="Time format" variant="select">
					<Select bind:value={timeFormat} type="single">
						<SelectTrigger class="w-full" id="time-format"
							><SelectValue /></SelectTrigger
						>
						<SelectContent>
							<SelectItem label="12 hours (am-pm)" value="12h"
								>12 hours (am-pm)</SelectItem
							>
							<SelectItem label="24 hours" value="24h">24 hours</SelectItem>
						</SelectContent>
					</Select>
				</SettingField>
			</div>
		</div>
	</SettingsSection>
</SettingsSection>
