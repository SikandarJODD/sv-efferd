<script lang="ts">
	import { CardContent } from "#lib/components/ui/card/index.js";
	import { FieldGroup, FieldSeparator } from "#lib/components/ui/field/index.js";
	import { Input } from "#lib/components/ui/input/index.js";
	import { Switch } from "#lib/components/ui/switch/index.js";
	import { ToggleGroup, ToggleGroupItem } from "#lib/components/ui/toggle-group/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	const statuses = [
		{ value: "online", label: "Online", color: "bg-emerald-500" },
		{ value: "away", label: "Away", color: "bg-amber-500" },
		{ value: "offline", label: "Offline", color: "bg-rose-500" }
	] as const;

	let status = $state("online");
	let autoAssign = $state(true);
</script>

<SettingsSection description="When and how much work gets routed to you." title="Availability">
	<CardContent class="flex-1 px-0 py-(--card-spacing)">
		<FieldGroup class="gap-5">
			<SettingField
				description="Shown to teammates in the queue."
				htmlFor="status"
				label="Status"
			>
				<ToggleGroup
					aria-label="Status"
					bind:value={status}
					id="status"
					type="single"
					variant="outline"
				>
					{#each statuses as option (option.value)}
						<ToggleGroupItem value={option.value}>
							<span class="flex items-center gap-1.5">
								<span
									class={["size-2 rounded-full", option.color]}
									aria-hidden="true"
								></span>
								{option.label}
							</span>
						</ToggleGroupItem>
					{/each}
				</ToggleGroup>
			</SettingField>
			<FieldSeparator />
			<SettingField
				description="Outside these hours you're set to away."
				htmlFor="hours-start"
				label="Working hours"
			>
				<div class="flex items-center gap-2">
					<Input
						aria-label="Start time"
						class="w-32"
						id="hours-start"
						type="time"
						value="09:00"
					/>
					<span class="text-xs text-muted-foreground">to</span>
					<Input aria-label="End time" class="w-32" type="time" value="17:00" />
				</div>
			</SettingField>
			<FieldSeparator />
			<SettingField
				description="Assign new threads to you automatically."
				htmlFor="auto-assign"
				label="Auto-assign"
				orientation="horizontal"
			>
				<Switch bind:checked={autoAssign} id="auto-assign" />
			</SettingField>
		</FieldGroup>
	</CardContent>
</SettingsSection>
