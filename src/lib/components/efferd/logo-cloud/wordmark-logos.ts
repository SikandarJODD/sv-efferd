export type WordmarkLogo = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export const wordmarkLogosByName = {
	nvidia: {
		src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
		alt: "Nvidia Logo",
		width: 164,
		height: 30
	},
	supabase: {
		src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
		alt: "Supabase Logo",
		width: 581,
		height: 113
	},
	openai: {
		src: "https://storage.efferd.com/logo/openai-wordmark.svg",
		alt: "OpenAI Logo",
		width: 1180,
		height: 320
	},
	turso: {
		src: "https://storage.efferd.com/logo/turso-wordmark.svg",
		alt: "Turso Logo",
		width: 740,
		height: 170
	},
	vercel: {
		src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
		alt: "Vercel Logo",
		width: 262,
		height: 52
	},
	github: {
		src: "https://storage.efferd.com/logo/github-wordmark.svg",
		alt: "GitHub Logo",
		width: 249.1,
		height: 67.5
	},
	claude: {
		src: "https://storage.efferd.com/logo/claude-wordmark.svg",
		alt: "Claude AI Logo",
		width: 512,
		height: 110
	},
	clerk: {
		src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
		alt: "Clerk Logo",
		width: 441,
		height: 128
	},
	dub: {
		src: "https://storage.efferd.com/logo/dub-wordmark.svg",
		alt: "Dub Logo",
		width: 46,
		height: 24
	},
	bolt: {
		src: "https://storage.efferd.com/logo/bolt-wordmark.svg",
		alt: "Bolt Logo",
		width: 160,
		height: 68.7
	},
	stripe: {
		src: "https://storage.efferd.com/logo/stripe-wordmark.svg",
		alt: "Stripe Logo",
		width: 512,
		height: 214
	}
} as const satisfies Record<string, WordmarkLogo>;

export const wordmarkLogos = [
	wordmarkLogosByName.nvidia,
	wordmarkLogosByName.supabase,
	wordmarkLogosByName.openai,
	wordmarkLogosByName.turso,
	wordmarkLogosByName.vercel,
	wordmarkLogosByName.github,
	wordmarkLogosByName.claude,
	wordmarkLogosByName.clerk
] as const;

export const extendedWordmarkLogos = [
	wordmarkLogosByName.vercel,
	wordmarkLogosByName.supabase,
	wordmarkLogosByName.openai,
	wordmarkLogosByName.dub,
	wordmarkLogosByName.turso,
	wordmarkLogosByName.github,
	wordmarkLogosByName.claude,
	wordmarkLogosByName.nvidia,
	wordmarkLogosByName.clerk,
	wordmarkLogosByName.bolt,
	wordmarkLogosByName.stripe
] as const;
