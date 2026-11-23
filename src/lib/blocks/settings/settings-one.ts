import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import SettingsOnePreview from "#lib/components/efferd/settings/settings-one/preview.svelte";

import indexSource from "#lib/components/efferd/settings/settings-one/index.ts?raw";
import notificationSettingsSource from "#lib/components/efferd/settings/settings-one/notification-settings.svelte?raw";
import previewSource from "#lib/components/efferd/settings/settings-one/preview.svelte?raw";
import profileSettingsSource from "#lib/components/efferd/settings/settings-one/profile-settings.svelte?raw";
import settingFieldSource from "#lib/components/efferd/settings/settings-one/setting-field.svelte?raw";
import settingsSectionSource from "#lib/components/efferd/settings/settings-one/settings-section.svelte?raw";
import settingsSource from "#lib/components/efferd/settings/settings-one/settings.svelte?raw";

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
	}
];

export const settingsOneBlock: BlockShowcaseItem = {
	id: "settings-one",
	title: "Settings One",
	description:
		"A settings form for profile details and email preferences. It includes an avatar picker and save action.",
	previewComponent: SettingsOnePreview,
	previewHref: "/preview/settings/one",
	previewMode: "iframe",
	previewHeight: 760,
	installId: "settings-one",
	codeTree: createBlockCodeTree("settings-one:component", [
		{
			id: "settings-one:preview",
			path: "settings/preview.svelte",
			lang: "svelte",
			code: previewSource
		},
		{
			id: "settings-one:index",
			path: "efferd/settings/index.ts",
			lang: "typescript",
			code: indexSource
		},
		{
			id: "settings-one:component",
			path: "efferd/settings/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-one:profile-settings",
			path: "efferd/settings/profile-settings.svelte",
			lang: "svelte",
			code: profileSettingsSource
		},
		{
			id: "settings-one:notification-settings",
			path: "efferd/settings/notification-settings.svelte",
			lang: "svelte",
			code: notificationSettingsSource
		},
		{
			id: "settings-one:settings-section",
			path: "efferd/settings/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-one:setting-field",
			path: "efferd/settings/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		{
			id: "related:app-shell-two",
			path: "related/app-shell-two",
			externalUrl: "/blocks/app-shell#app-shell-two",
			externalLabel: "View App Shell Two"
		},
		...uiFiles
	])
};
