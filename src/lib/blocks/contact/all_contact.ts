import type { BlockShowcaseItem } from '$lib/blocks/showcase';
import { createBlockCodeTree } from '$lib/blocks/showcase';
import ContactFive from '$lib/components/efferd/contact/contact-five.svelte';
import ContactFour from '$lib/components/efferd/contact/contact-four.svelte';
import ContactOne from '$lib/components/efferd/contact/contact-one.svelte';
import ContactThree from '$lib/components/efferd/contact/contact-three.svelte';
import ContactTwo from '$lib/components/efferd/contact/contact-two.svelte';

import contactFiveSource from '$lib/components/efferd/contact/contact-five.svelte?raw';
import contactFormSource from '$lib/components/efferd/contact/contact-form.svelte?raw';
import contactFourSource from '$lib/components/efferd/contact/contact-four.svelte?raw';
import contactOneSource from '$lib/components/efferd/contact/contact-one.svelte?raw';
import contactThreeSource from '$lib/components/efferd/contact/contact-three.svelte?raw';
import contactTwoSource from '$lib/components/efferd/contact/contact-two.svelte?raw';
import decorIconIndexSource from '$lib/components/ui/decor-icon/index.ts?raw';
import decorIconSource from '$lib/components/ui/decor-icon/decor-icon.svelte?raw';
import fieldContentSource from '$lib/components/ui/field/field-content.svelte?raw';
import fieldDescriptionSource from '$lib/components/ui/field/field-description.svelte?raw';
import fieldErrorSource from '$lib/components/ui/field/field-error.svelte?raw';
import fieldGroupSource from '$lib/components/ui/field/field-group.svelte?raw';
import fieldIndexSource from '$lib/components/ui/field/index.ts?raw';
import fieldLabelSource from '$lib/components/ui/field/field-label.svelte?raw';
import fieldLegendSource from '$lib/components/ui/field/field-legend.svelte?raw';
import fieldRootSource from '$lib/components/ui/field/field.svelte?raw';
import fieldSeparatorSource from '$lib/components/ui/field/field-separator.svelte?raw';
import fieldSetSource from '$lib/components/ui/field/field-set.svelte?raw';
import fieldTitleSource from '$lib/components/ui/field/field-title.svelte?raw';
import dividerIndexSource from '$lib/components/ui/full-width-divider/index.ts?raw';
import dividerSource from '$lib/components/ui/full-width-divider/full-width-divider.svelte?raw';
import inputIndexSource from '$lib/components/ui/input/index.ts?raw';
import inputSource from '$lib/components/ui/input/input.svelte?raw';
import textareaIndexSource from '$lib/components/ui/textarea/index.ts?raw';
import textareaSource from '$lib/components/ui/textarea/textarea.svelte?raw';
import githubSvgSource from '$lib/svgs/github.svelte?raw';
import xSvgSource from '$lib/svgs/x.svelte?raw';

const buttonFiles = [
	{
		id: 'shared:button',
		path: 'components/ui/button/button.svelte',
		externalUrl: 'https://shadcn-svelte.com/docs/components/button',
		externalLabel: 'Shadcn Svelte Button'
	}
];

const dividerFiles = [
	{
		id: 'shared:divider-index',
		path: 'components/ui/full-width-divider/index.ts',
		lang: 'typescript' as const,
		code: dividerIndexSource
	},
	{
		id: 'shared:divider',
		path: 'components/ui/full-width-divider/full-width-divider.svelte',
		lang: 'svelte' as const,
		code: dividerSource
	}
];

const decorIconFiles = [
	{
		id: 'shared:decor-icon-index',
		path: 'components/ui/decor-icon/index.ts',
		lang: 'typescript' as const,
		code: decorIconIndexSource
	},
	{
		id: 'shared:decor-icon',
		path: 'components/ui/decor-icon/decor-icon.svelte',
		lang: 'svelte' as const,
		code: decorIconSource
	}
];

const fieldFiles = [
	{
		id: 'shared:field-index',
		path: 'components/ui/field/index.ts',
		lang: 'typescript' as const,
		code: fieldIndexSource
	},
	{
		id: 'shared:field-root',
		path: 'components/ui/field/field.svelte',
		lang: 'svelte' as const,
		code: fieldRootSource
	},
	{
		id: 'shared:field-set',
		path: 'components/ui/field/field-set.svelte',
		lang: 'svelte' as const,
		code: fieldSetSource
	},
	{
		id: 'shared:field-legend',
		path: 'components/ui/field/field-legend.svelte',
		lang: 'svelte' as const,
		code: fieldLegendSource
	},
	{
		id: 'shared:field-group',
		path: 'components/ui/field/field-group.svelte',
		lang: 'svelte' as const,
		code: fieldGroupSource
	},
	{
		id: 'shared:field-content',
		path: 'components/ui/field/field-content.svelte',
		lang: 'svelte' as const,
		code: fieldContentSource
	},
	{
		id: 'shared:field-label',
		path: 'components/ui/field/field-label.svelte',
		lang: 'svelte' as const,
		code: fieldLabelSource
	},
	{
		id: 'shared:field-title',
		path: 'components/ui/field/field-title.svelte',
		lang: 'svelte' as const,
		code: fieldTitleSource
	},
	{
		id: 'shared:field-description',
		path: 'components/ui/field/field-description.svelte',
		lang: 'svelte' as const,
		code: fieldDescriptionSource
	},
	{
		id: 'shared:field-separator',
		path: 'components/ui/field/field-separator.svelte',
		lang: 'svelte' as const,
		code: fieldSeparatorSource
	},
	{
		id: 'shared:field-error',
		path: 'components/ui/field/field-error.svelte',
		lang: 'svelte' as const,
		code: fieldErrorSource
	}
];

const inputFiles = [
	{
		id: 'shared:input-index',
		path: 'components/ui/input/index.ts',
		lang: 'typescript' as const,
		code: inputIndexSource
	},
	{
		id: 'shared:input',
		path: 'components/ui/input/input.svelte',
		lang: 'svelte' as const,
		code: inputSource
	}
];

const textareaFiles = [
	{
		id: 'shared:textarea-index',
		path: 'components/ui/textarea/index.ts',
		lang: 'typescript' as const,
		code: textareaIndexSource
	},
	{
		id: 'shared:textarea',
		path: 'components/ui/textarea/textarea.svelte',
		lang: 'svelte' as const,
		code: textareaSource
	}
];

const xSvgFiles = [
	{
		id: 'shared:x-svg',
		path: 'svgs/x.svelte',
		lang: 'svelte' as const,
		code: xSvgSource
	}
];

const githubSvgFiles = [
	{
		id: 'shared:github-svg',
		path: 'svgs/github.svelte',
		lang: 'svelte' as const,
		code: githubSvgSource
	}
];

export const contactBlocks: BlockShowcaseItem[] = [
	{
		id: 'contact-one',
		title: 'Contact One',
		description: 'A compact contact strip with quick details framed by full-width dividers.',
		previewComponent: ContactOne,
		previewHref: '/preview/contact/one',
		previewMode: 'iframe',
		previewHeight: 420,
		installId: 'contact-one',
		codeTree: createBlockCodeTree('contact-one:component', [
			{
				id: 'contact-one:component',
				path: 'components/efferd/contact/contact-one.svelte',
				lang: 'svelte',
				code: contactOneSource
			},
			...dividerFiles
		])
	},
	{
		id: 'contact-two',
		title: 'Contact Two',
		description: 'A three-column contact hub for email, social DMs, and community support.',
		previewComponent: ContactTwo,
		previewHref: '/preview/contact/two',
		previewMode: 'iframe',
		previewHeight: 520,
		installId: 'contact-two',
		codeTree: createBlockCodeTree('contact-two:component', [
			{
				id: 'contact-two:component',
				path: 'components/efferd/contact/contact-two.svelte',
				lang: 'svelte',
				code: contactTwoSource
			},
			...buttonFiles,
			...xSvgFiles
		])
	},
	{
		id: 'contact-three',
		title: 'Contact Three',
		description:
			'A full-page contact layout with detailed channels, office info, and social links.',
		previewComponent: ContactThree,
		previewHref: '/preview/contact/three',
		previewMode: 'iframe',
		previewHeight: 980,
		installId: 'contact-three',
		codeTree: createBlockCodeTree('contact-three:component', [
			{
				id: 'contact-three:component',
				path: 'components/efferd/contact/contact-three.svelte',
				lang: 'svelte',
				code: contactThreeSource
			},
			...dividerFiles,
			...githubSvgFiles,
			...xSvgFiles
		])
	},
	{
		id: 'contact-four',
		title: 'Contact Four',
		description: 'A split contact form with direct support details and a structured inquiry panel.',
		previewComponent: ContactFour,
		previewHref: '/preview/contact/four',
		previewMode: 'iframe',
		previewHeight: 820,
		installId: 'contact-four',
		codeTree: createBlockCodeTree('contact-four:component', [
			{
				id: 'contact-four:component',
				path: 'components/efferd/contact/contact-four.svelte',
				lang: 'svelte',
				code: contactFourSource
			},
			...buttonFiles,
			...fieldFiles,
			...inputFiles,
			...textareaFiles
		])
	},
	{
		id: 'contact-five',
		title: 'Contact Five',
		description: 'A bordered contact card pairing essential details with a reusable message form.',
		previewComponent: ContactFive,
		previewHref: '/preview/contact/five',
		previewMode: 'iframe',
		previewHeight: 860,
		installId: 'contact-five',
		codeTree: createBlockCodeTree('contact-five:component', [
			{
				id: 'contact-five:component',
				path: 'components/efferd/contact/contact-five.svelte',
				lang: 'svelte',
				code: contactFiveSource
			},
			{
				id: 'contact-five:form',
				path: 'components/efferd/contact/contact-form.svelte',
				lang: 'svelte',
				code: contactFormSource
			},
			...buttonFiles,
			...decorIconFiles,
			...fieldFiles,
			...inputFiles,
			...textareaFiles
		])
	}
];

export function getContactBlock(id: string) {
	return contactBlocks.find((block) => block.id === id);
}
