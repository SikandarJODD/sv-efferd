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
		path: "components/ui/avatar/avatar.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/avatar",
		externalLabel: "Shadcn Svelte Avatar"
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
		id: "shared:field",
		path: "components/ui/field/field.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/field",
		externalLabel: "Shadcn Svelte Field"
	},
	{
		id: "shared:input-group",
		path: "components/ui/input-group/input-group.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/input-group",
		externalLabel: "Shadcn Svelte Input Group"
	},
	{
		id: "shared:select",
		path: "components/ui/select/select.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/select",
		externalLabel: "Shadcn Svelte Select"
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
			path: "components/efferd/settings/settings-two/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-two:profile-settings",
			path: "components/efferd/settings/settings-two/profile-settings.svelte",
			lang: "svelte",
			code: profileSettingsSource
		},
		{
			id: "settings-two:appearance-settings",
			path: "components/efferd/settings/settings-two/appearance-settings.svelte",
			lang: "svelte",
			code: appearanceSettingsSource
		},
		{
			id: "settings-two:notification-settings",
			path: "components/efferd/settings/settings-two/notification-settings.svelte",
			lang: "svelte",
			code: notificationSettingsSource
		},
		{
			id: "settings-two:security-settings",
			path: "components/efferd/settings/settings-two/security-settings.svelte",
			lang: "svelte",
			code: securitySettingsSource
		},
		{
			id: "settings-two:danger-settings",
			path: "components/efferd/settings/settings-two/danger-settings.svelte",
			lang: "svelte",
			code: dangerSettingsSource
		},
		{
			id: "settings-two:settings-section",
			path: "components/efferd/settings/settings-two/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-two:setting-field",
			path: "components/efferd/settings/settings-two/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		...uiFiles
	])
};
