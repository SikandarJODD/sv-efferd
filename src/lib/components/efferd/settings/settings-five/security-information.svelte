<script lang="ts">
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import PencilIcon from "@lucide/svelte/icons/pencil";
	import ShieldIcon from "@lucide/svelte/icons/shield";
	import { Badge } from "#lib/components/ui/badge/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import Github from "#lib/components/svgs/github.svelte";
	import Google from "#lib/components/svgs/google.svelte";
	import SettingField from "./setting-field.svelte";
	import SettingsSection from "./settings-section.svelte";
</script>

<SettingsSection variant="group">
	<SettingsSection variant="group-title">
		<ShieldIcon aria-hidden="true" />
		Security information
	</SettingsSection>
	<SettingsSection
		class="grid gap-8 lg:grid-cols-[0.6fr_1fr] lg:gap-0 xl:grid-cols-[0.4fr_1fr]"
		variant="panel"
	>
		<div class="flex flex-col gap-6 lg:pr-8">
			<div class="flex flex-wrap items-center gap-4">
				<SettingsSection variant="panel-title">Username</SettingsSection>
				<Button class="text-muted-foreground" size="sm" type="button" variant="ghost">
					<PencilIcon aria-hidden="true" />
					Edit
				</Button>
			</div>
			<SettingField label="Current Username"
				><span class="truncate text-sm">shabanhr</span></SettingField
			>
		</div>
		<div class="flex flex-col gap-6 lg:pl-8">
			<div class="flex flex-wrap items-center gap-4">
				<SettingsSection variant="panel-title">Login methods</SettingsSection>
				<Button class="text-muted-foreground" size="sm" type="button" variant="ghost">
					Manage
					<ArrowRightIcon aria-hidden="true" />
				</Button>
			</div>
			<div class="grid gap-6 sm:grid-cols-2">
				<SettingField label="Password">—</SettingField>
				<SettingField label="External platforms">
					<div class="flex items-center gap-2.5">
						<Badge variant="secondary">
							<Google aria-label="Google" class="size-4 text-foreground" />
							<span class="text-sm">Google</span>
						</Badge>
						<Badge variant="secondary">
							<Github aria-label="GitHub" class="size-4 text-foreground" />
							<span class="text-sm">GitHub</span>
						</Badge>
					</div>
				</SettingField>
			</div>
		</div>
	</SettingsSection>
</SettingsSection>
