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
		path: "ui/alert-dialog",
		externalUrl: "https://shadcn-svelte.com/docs/components/alert-dialog",
		externalLabel: "Shadcn Svelte Alert Dialog"
	},
	{
		id: "shared:avatar",
		path: "ui/avatar",
		externalUrl: "https://shadcn-svelte.com/docs/components/avatar",
		externalLabel: "Shadcn Svelte Avatar"
	},
	{
		id: "shared:badge",
		path: "ui/badge",
		externalUrl: "https://shadcn-svelte.com/docs/components/badge",
		externalLabel: "Shadcn Svelte Badge"
	},
	{
		id: "shared:button",
		path: "ui/button",
		externalUrl: "https://shadcn-svelte.com/docs/components/button",
		externalLabel: "Shadcn Svelte Button"
	},
	{
		id: "shared:card",
		path: "ui/card",
		externalUrl: "https://shadcn-svelte.com/docs/components/card",
		externalLabel: "Shadcn Svelte Card"
	},
	{
		id: "shared:checkbox",
		path: "ui/checkbox",
		externalUrl: "https://shadcn-svelte.com/docs/components/checkbox",
		externalLabel: "Shadcn Svelte Checkbox"
	},
	{
		id: "shared:field",
		path: "ui/field",
		externalUrl: "https://shadcn-svelte.com/docs/components/field",
		externalLabel: "Shadcn Svelte Field"
	},
	{
		id: "shared:input",
		path: "ui/input",
		externalUrl: "https://shadcn-svelte.com/docs/components/input",
		externalLabel: "Shadcn Svelte Input"
	},
	{
		id: "shared:switch",
		path: "ui/switch",
		externalUrl: "https://shadcn-svelte.com/docs/components/switch",
		externalLabel: "Shadcn Svelte Switch"
	},
	{
		id: "shared:toggle-group",
		path: "ui/toggle-group",
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
			path: "efferd/settings/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-three:agent-preview",
			path: "efferd/settings/agent-preview.svelte",
			lang: "svelte",
			code: agentPreviewSource
		},
		{
			id: "settings-three:profile-settings",
			path: "efferd/settings/profile-settings.svelte",
			lang: "svelte",
			code: profileSettingsSource
		},
		{
			id: "settings-three:availability-settings",
			path: "efferd/settings/availability-settings.svelte",
			lang: "svelte",
			code: availabilitySettingsSource
		},
		{
			id: "settings-three:notification-settings",
			path: "efferd/settings/notification-settings.svelte",
			lang: "svelte",
			code: notificationSettingsSource
		},
		{
			id: "settings-three:danger-settings",
			path: "efferd/settings/danger-settings.svelte",
			lang: "svelte",
			code: dangerSettingsSource
		},
		{
			id: "settings-three:settings-section",
			path: "efferd/settings/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-three:setting-field",
			path: "efferd/settings/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		...uiFiles
	])
};
