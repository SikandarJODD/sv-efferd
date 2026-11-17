import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import Settings from "#lib/components/efferd/settings/settings-one/settings.svelte";

import notificationSettingsSource from "#lib/components/efferd/settings/settings-one/notification-settings.svelte?raw";
import profileSettingsSource from "#lib/components/efferd/settings/settings-one/profile-settings.svelte?raw";
import settingFieldSource from "#lib/components/efferd/settings/settings-one/setting-field.svelte?raw";
import settingsSectionSource from "#lib/components/efferd/settings/settings-one/settings-section.svelte?raw";
import settingsSource from "#lib/components/efferd/settings/settings-one/settings.svelte?raw";

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
	}
];

export const settingsOneBlock: BlockShowcaseItem = {
	id: "settings-one",
	title: "Settings One",
	description:
		"A settings form for profile details and email preferences. It includes an avatar picker and save action.",
	previewComponent: Settings,
	previewHref: "/preview/settings/one",
	previewMode: "iframe",
	previewHeight: 760,
	installId: "settings-one",
	codeTree: createBlockCodeTree("settings-one:component", [
		{
			id: "settings-one:component",
			path: "components/efferd/settings/settings-one/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-one:profile-settings",
			path: "components/efferd/settings/settings-one/profile-settings.svelte",
			lang: "svelte",
			code: profileSettingsSource
		},
		{
			id: "settings-one:notification-settings",
			path: "components/efferd/settings/settings-one/notification-settings.svelte",
			lang: "svelte",
			code: notificationSettingsSource
		},
		{
			id: "settings-one:settings-section",
			path: "components/efferd/settings/settings-one/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-one:setting-field",
			path: "components/efferd/settings/settings-one/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		...uiFiles
	])
};

export const settingsBlocks = [settingsOneBlock];
