import type { BlockShowcaseItem } from "#lib/blocks/showcase.js";
import { createBlockCodeTree } from "#lib/blocks/showcase.js";
import Settings from "#lib/components/efferd/settings/settings-five/settings.svelte";

import dangerZoneSettingsSource from "#lib/components/efferd/settings/settings-five/danger-zone-settings.svelte?raw";
import localizationSettingsSource from "#lib/components/efferd/settings/settings-five/localization-settings.svelte?raw";
import profileInformationSource from "#lib/components/efferd/settings/settings-five/profile-information.svelte?raw";
import securityInformationSource from "#lib/components/efferd/settings/settings-five/security-information.svelte?raw";
import settingFieldSource from "#lib/components/efferd/settings/settings-five/setting-field.svelte?raw";
import settingsHeaderSource from "#lib/components/efferd/settings/settings-five/settings-header.svelte?raw";
import settingsSectionSource from "#lib/components/efferd/settings/settings-five/settings-section.svelte?raw";
import settingsSource from "#lib/components/efferd/settings/settings-five/settings.svelte?raw";
import githubSvgSource from "#lib/svgs/github.svelte?raw";
import googleSvgSource from "#lib/svgs/google.svelte?raw";

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
		id: "shared:label",
		path: "components/ui/label/label.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/label",
		externalLabel: "Shadcn Svelte Label"
	},
	{
		id: "shared:select",
		path: "components/ui/select/select.svelte",
		externalUrl: "https://shadcn-svelte.com/docs/components/select",
		externalLabel: "Shadcn Svelte Select"
	}
];

export const settingsFiveBlock: BlockShowcaseItem = {
	id: "settings-five",
	title: "Settings Five",
	description:
		"An account overview for profile, security, localization, and destructive account actions.",
	previewComponent: Settings,
	previewHref: "/preview/settings/five",
	previewMode: "iframe",
	previewHeight: 1240,
	installId: "settings-five",
	codeTree: createBlockCodeTree("settings-five:component", [
		{
			id: "settings-five:component",
			path: "components/efferd/settings/settings-five/settings.svelte",
			lang: "svelte",
			code: settingsSource
		},
		{
			id: "settings-five:settings-header",
			path: "components/efferd/settings/settings-five/settings-header.svelte",
			lang: "svelte",
			code: settingsHeaderSource
		},
		{
			id: "settings-five:profile-information",
			path: "components/efferd/settings/settings-five/profile-information.svelte",
			lang: "svelte",
			code: profileInformationSource
		},
		{
			id: "settings-five:security-information",
			path: "components/efferd/settings/settings-five/security-information.svelte",
			lang: "svelte",
			code: securityInformationSource
		},
		{
			id: "settings-five:localization-settings",
			path: "components/efferd/settings/settings-five/localization-settings.svelte",
			lang: "svelte",
			code: localizationSettingsSource
		},
		{
			id: "settings-five:danger-zone-settings",
			path: "components/efferd/settings/settings-five/danger-zone-settings.svelte",
			lang: "svelte",
			code: dangerZoneSettingsSource
		},
		{
			id: "settings-five:settings-section",
			path: "components/efferd/settings/settings-five/settings-section.svelte",
			lang: "svelte",
			code: settingsSectionSource
		},
		{
			id: "settings-five:setting-field",
			path: "components/efferd/settings/settings-five/setting-field.svelte",
			lang: "svelte",
			code: settingFieldSource
		},
		{
			id: "shared:google-svg",
			path: "svgs/google.svelte",
			lang: "svelte",
			code: googleSvgSource
		},
		{
			id: "shared:github-svg",
			path: "svgs/github.svelte",
			lang: "svelte",
			code: githubSvgSource
		},
		...uiFiles
	])
};
