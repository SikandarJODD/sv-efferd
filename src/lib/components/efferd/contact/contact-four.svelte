<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Field, FieldGroup, FieldLabel } from '$lib/components/ui/field';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { cn } from '$lib/utils';
	import { Icon as LucideIcon, MailIcon, PhoneIcon } from '@lucide/svelte';

	type ContactInfoItem = {
		icon: typeof LucideIcon;
		label: string;
		value: string;
		href: string;
	};

	const contactInfo: ContactInfoItem[] = [
		{
			icon: MailIcon,
			label: 'Email',
			value: 'mail@example.com',
			href: 'mailto:mail@example.com'
		},
		{
			icon: PhoneIcon,
			label: 'Phone',
			value: '+92 312 1234567',
			href: 'tel:+923121234567'
		}
	];

	let fullName = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
</script>

<div
	class="relative mx-auto grid h-full w-full max-w-4xl rounded-2xl border md:grid-cols-[1fr_0.70fr]"
>
	<div class="col-span-1 flex flex-col space-y-4 p-8 lg:p-10">
		<h1 class="text-2xl font-medium tracking-wide md:text-3xl">Contact With Us</h1>
		<p class="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
			If you have any questions regarding our Services or need help, please fill out the form here.
		</p>
		<p class="max-w-md text-xs leading-relaxed text-muted-foreground md:text-sm">
			We do our best to respond within 1 business day.
		</p>
		<div class="grid gap-4">
			{#each contactInfo as info}
				{@const Icon = info.icon}
				<div class={cn('flex items-center gap-3 py-3')}>
					<div class="rounded-lg border bg-card p-3 shadow-xs [&_svg]:size-5">
						<Icon />
					</div>
					<div>
						<p class="font-medium">{info.label}</p>
						<a class="text-xs text-muted-foreground hover:underline" href={info.href}>
							{info.value}
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="col-span-1 flex items-center border-t p-8 md:border-t-0 md:border-l">
		<form class="w-full">
			<FieldGroup>
				<Field>
					<FieldLabel for="full-name">Full name</FieldLabel>
					<Input
						id="full-name"
						type="text"
						placeholder="John Doe"
						autocomplete="off"
						bind:value={fullName}
					/>
				</Field>

				<Field>
					<FieldLabel for="email">Email</FieldLabel>
					<Input
						id="email"
						type="email"
						placeholder="johndoe@example.com"
						autocomplete="off"
						bind:value={email}
					/>
				</Field>

				<Field>
					<FieldLabel for="phone">Phone</FieldLabel>
					<Input
						id="phone"
						type="tel"
						placeholder="+1 (555) 123-4567"
						autocomplete="off"
						bind:value={phone}
					/>
				</Field>

				<Field>
					<FieldLabel for="message">Message</FieldLabel>
					<Textarea
						id="message"
						placeholder="Your message"
						autocomplete="off"
						bind:value={message}
					/>
				</Field>
			</FieldGroup>

			<Button class="mt-8 w-full" type="submit">Submit</Button>
		</form>
	</div>
</div>
