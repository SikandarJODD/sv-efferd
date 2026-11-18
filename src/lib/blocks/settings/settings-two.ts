import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import Settings from "#lib/components/efferd/settings/settings-two/settings.svelte";

import appearanceSettingsSource from "#lib/components/efferd/settings/settings-two/appearance-settings.svelte?raw";
import dangerSettingsSource from "#lib/components/efferd/settings/settings-two/danger-settings.svelte?raw";
import notificationSettingsSource from "#lib/components/efferd/settings/settings-two/notification-settings.svelte?raw";
import profileSettingsSource from "#lib/components/efferd/settings/settings-two/profile-settings.svelte?raw";
import securitySettingsSource from "#lib/components/efferd/settings/settings-two/security-settings.svelte?raw";
import settingFieldSource from "#lib/components/efferd/settings/settings-two/setting-field.svelte?raw";
import settingsSectionSource from "#lib/components/efferd/settings/settings-two/settings-section.svelte?raw";
import settingsSource from "#lib/components/efferd/settings/settings-two/settings.svelte?raw";

const uiFiles = [
	{
		id: "shared:avatar",
		path: "ui/avatar",
		externalUrl: "https://shadcn-svelte.com/docs/components/avatar",
		externalLabel: "Shadcn Svelte Avatar"
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
		id: "shared:field",
		path: "ui/field",
		externalUrl: "https://shadcn-svelte.com/docs/components/field",
		externalLabel: "Shadcn Svelte Field"
	},
	{
		id: "shared:input-group",
		path: "ui/input-group",
		externalUrl: "https://shadcn-svelte.com/docs/components/input-group",
		externalLabel: "Shadcn Svelte Input Group"
	},
	{
		id: "shared:select",
		path: "ui/select",
		externalUrl: "https://shadcn-svelte.com/docs/components/select",
		externalLabel: "Shadcn Svelte Select"
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

export const settingsTwoBlock: BlockShowcaseItem = {
	id: "settings-two",
	title: "Settings Two",
	description:
		"A comprehensive account settings dashboard for profile, appearance, notifications, security, and destructive actions.",
	previewComponent: Settings,
	previewHref: "/preview/settings/two",
	previewMode: "iframe",
	previewHeight: 1040,
	installId: "settings-two",
	codeTree: createBlockCodeTree("settings-two:component", [
		{
			id: "settings-two:component",
			path: "efferd/settings/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-two:profile-settings",
			path: "efferd/settings/profile-settings.svelte",
			lang: "svelte",
			code: profileSettingsSource
		},
		{
			id: "settings-two:appearance-settings",
			path: "efferd/settings/appearance-settings.svelte",
			lang: "svelte",
			code: appearanceSettingsSource
		},
		{
			id: "settings-two:notification-settings",
			path: "efferd/settings/notification-settings.svelte",
			lang: "svelte",
			code: notificationSettingsSource
		},
		{
			id: "settings-two:security-settings",
			path: "efferd/settings/security-settings.svelte",
			lang: "svelte",
			code: securitySettingsSource
		},
		{
			id: "settings-two:danger-settings",
			path: "efferd/settings/danger-settings.svelte",
			lang: "svelte",
			code: dangerSettingsSource
		},
		{
			id: "settings-two:settings-section",
			path: "efferd/settings/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-two:setting-field",
			path: "efferd/settings/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		...uiFiles
	])
};
