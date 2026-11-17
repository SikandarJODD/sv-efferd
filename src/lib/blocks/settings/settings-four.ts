import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import Settings from "#lib/components/efferd/settings/settings-four/settings.svelte";

import avatarFieldSource from "#lib/components/efferd/settings/settings-four/avatar-field.svelte?raw";
import deleteAccountFieldSource from "#lib/components/efferd/settings/settings-four/delete-account-field.svelte?raw";
import emailFieldSource from "#lib/components/efferd/settings/settings-four/email-field.svelte?raw";
import nameFieldSource from "#lib/components/efferd/settings/settings-four/name-field.svelte?raw";
import settingFieldSource from "#lib/components/efferd/settings/settings-four/setting-field.svelte?raw";
import settingsSectionSource from "#lib/components/efferd/settings/settings-four/settings-section.svelte?raw";
import settingsSource from "#lib/components/efferd/settings/settings-four/settings.svelte?raw";
import userIdFieldSource from "#lib/components/efferd/settings/settings-four/user-id-field.svelte?raw";
import clipboardHookSource from "#lib/hooks/use-clipboard.svelte.ts?raw";

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
	}
];

export const settingsFourBlock: BlockShowcaseItem = {
	id: "settings-four",
	title: "Settings Four",
	description:
		"A stacked account settings form for name, email, avatar, user ID, and account deletion.",
	previewComponent: Settings,
	previewHref: "/preview/settings/four",
	previewMode: "iframe",
	previewHeight: 1480,
	installId: "settings-four",
	codeTree: createBlockCodeTree("settings-four:component", [
		{
			id: "settings-four:component",
			path: "components/efferd/settings/settings-four/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-four:name-field",
			path: "components/efferd/settings/settings-four/name-field.svelte",
			lang: "svelte",
			code: nameFieldSource
		},
		{
			id: "settings-four:email-field",
			path: "components/efferd/settings/settings-four/email-field.svelte",
			lang: "svelte",
			code: emailFieldSource
		},
		{
			id: "settings-four:avatar-field",
			path: "components/efferd/settings/settings-four/avatar-field.svelte",
			lang: "svelte",
			code: avatarFieldSource
		},
		{
			id: "settings-four:user-id-field",
			path: "components/efferd/settings/settings-four/user-id-field.svelte",
			lang: "svelte",
			code: userIdFieldSource
		},
		{
			id: "settings-four:delete-account-field",
			path: "components/efferd/settings/settings-four/delete-account-field.svelte",
			lang: "svelte",
			code: deleteAccountFieldSource
		},
		{
			id: "settings-four:settings-section",
			path: "components/efferd/settings/settings-four/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-four:setting-field",
			path: "components/efferd/settings/settings-four/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		{
			id: "shared:use-clipboard",
			path: "hooks/use-clipboard.svelte.ts",
			lang: "typescript",
			code: clipboardHookSource
		},
		...uiFiles
	])
};
