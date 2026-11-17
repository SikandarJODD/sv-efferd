import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import Settings from "#lib/components/efferd/settings/settings-three/settings.svelte";

import agentPreviewSource from "#lib/components/efferd/settings/settings-three/agent-preview.svelte?raw";
import availabilitySettingsSource from "#lib/components/efferd/settings/settings-three/availability-settings.svelte?raw";
import dangerSettingsSource from "#lib/components/efferd/settings/settings-three/danger-settings.svelte?raw";
import notificationSettingsSource from "#lib/components/efferd/settings/settings-three/notification-settings.svelte?raw";
import profileSettingsSource from "#lib/components/efferd/settings/settings-three/profile-settings.svelte?raw";
import settingFieldSource from "#lib/components/efferd/settings/settings-three/setting-field.svelte?raw";
import settingsSectionSource from "#lib/components/efferd/settings/settings-three/settings-section.svelte?raw";
import settingsSource from "#lib/components/efferd/settings/settings-three/settings.svelte?raw";

const uiFiles = [
	{
		id: "shared:alert-dialog",
		path: "components/ui/alert-dialog/alert-dialog.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/alert-dialog",
		externalLabel: "Shadcn Svelte Alert Dialog"
	},
	{
		id: "shared:avatar",
		path: "components/ui/avatar/avatar.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/avatar",
		externalLabel: "Shadcn Svelte Avatar"
	},
	{
		id: "shared:badge",
		path: "components/ui/badge/badge.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/badge",
		externalLabel: "Shadcn Svelte Badge"
	},
	{
		id: "shared:button",
		path: "components/ui/button/button.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	},
	{
		id: "shared:card",
		path: "components/ui/card/card.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/card",
		externalLabel: "Shadcn Svelte Card"
	},
	{
		id: "shared:checkbox",
		path: "components/ui/checkbox/checkbox.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/checkbox",
		externalLabel: "Shadcn Svelte Checkbox"
	},
	{
		id: "shared:field",
		path: "components/ui/field/field.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/field",
		externalLabel: "Shadcn Svelte Field"
	},
	{
		id: "shared:input",
		path: "components/ui/input/input.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/input",
		externalLabel: "Shadcn Svelte Input"
	},
	{
		id: "shared:switch",
		path: "components/ui/switch/switch.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/switch",
		externalLabel: "Shadcn Svelte Switch"
	},
	{
		id: "shared:toggle-group",
		path: "components/ui/toggle-group/toggle-group.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/toggle-group",
		externalLabel: "Shadcn Svelte Toggle Group"
	}
];

export const settingsThreeBlock: BlockShowcaseItem = {
	id: "settings-three",
	title: "Settings Three",
	description:
		"An agent settings dashboard for profile, availability, notifications, and destructive account actions.",
	previewComponent: Settings,
	previewHref: "/preview/settings/three",
	previewMode: "iframe",
	previewHeight: 1260,
	installId: "settings-three",
	codeTree: createBlockCodeTree("settings-three:component", [
		{
			id: "settings-three:component",
			path: "components/efferd/settings/settings-three/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-three:agent-preview",
			path: "components/efferd/settings/settings-three/agent-preview.svelte",
			lang: "svelte",
			code: agentPreviewSource
		},
		{
			id: "settings-three:profile-settings",
			path: "components/efferd/settings/settings-three/profile-settings.svelte",
			lang: "svelte",
			code: profileSettingsSource
		},
		{
			id: "settings-three:availability-settings",
			path: "components/efferd/settings/settings-three/availability-settings.svelte",
			lang: "svelte",
			code: availabilitySettingsSource
		},
		{
			id: "settings-three:notification-settings",
			path: "components/efferd/settings/settings-three/notification-settings.svelte",
			lang: "svelte",
			code: notificationSettingsSource
		},
		{
			id: "settings-three:danger-settings",
			path: "components/efferd/settings/settings-three/danger-settings.svelte",
			lang: "svelte",
			code: dangerSettingsSource
		},
		{
			id: "settings-three:settings-section",
			path: "components/efferd/settings/settings-three/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-three:setting-field",
			path: "components/efferd/settings/settings-three/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		...uiFiles
	])
};
