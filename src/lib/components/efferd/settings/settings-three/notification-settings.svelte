<script lang="ts">
	import { CardContent } from "#lib/components/ui/card/index.js";
	import { Checkbox } from "#lib/components/ui/checkbox/index.js";
	import { FieldGroup, FieldSeparator } from "#lib/components/ui/field/index.js";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";

	const methods = ["Email", "Push", "Desktop"] as const;
	type Method = (typeof methods)[number];

	const events: { id: string; label: string; description: string; enabled: Method[] }[] = [
		{
			id: "assigned",
			label: "Conversation assigned",
			description: "A thread is routed to you.",
			enabled: ["Email", "Push", "Desktop"]
		},
		{
			id: "reply",
			label: "Customer replied",
			description: "New message on your open threads.",
			enabled: ["Push", "Desktop"]
		},
		{
			id: "mention",
			label: "Mentioned",
			description: "A teammate @mentions you in a note.",
			enabled: ["Email", "Push"]
		},
		{
			id: "sla",
			label: "SLA at risk",
			description: "A reply is due in under 15 minutes.",
			enabled: ["Email", "Push", "Desktop"]
		}
	];
</script>

<SettingsSection description="Pick how you hear about each event." title="Notifications">
	<CardContent class="flex-1 px-0 py-(--card-spacing)">
		<FieldGroup class="gap-5">
			<div class="flex justify-end px-(--card-spacing)">
				<div class="grid w-56 grid-cols-3 justify-items-center gap-2">
					{#each methods as method (method)}
						<span class="text-xs text-muted-foreground">{method}</span>
					{/each}
				</div>
			</div>
			{#each events as event, index (event.id)}
				{#if index > 0}<FieldSeparator />{/if}
				<SettingField
					description={event.description}
					htmlFor={`${event.id}-email`}
					label={event.label}
				>
					<div class="grid w-56 grid-cols-3 justify-items-center gap-2">
						{#each methods as method (method)}
							<Checkbox
								aria-label={`${event.label} via ${method}`}
								checked={event.enabled.includes(method)}
								id={`${event.id}-${method.toLowerCase()}`}
							/>
						{/each}
					</div>
				</SettingField>
			{/each}
		</FieldGroup>
	</CardContent>
</SettingsSection>
