<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import { Input } from "#lib/components/ui/input/index.js";
	import { Textarea } from "#lib/components/ui/textarea/index.js";

	import { Field, FieldGroup, FieldLabel } from "#lib/components/ui/field/index.js";
	const id = $props.id();
	const firstNameId = `${id}-first-name`;
	const lastNameId = `${id}-last-name`;
	const emailId = `${id}-email`;
	const phoneId = `${id}-phone`;
	const messageId = `${id}-message`;
</script>

<form class="w-full">
	<FieldGroup>
		<div class="grid grid-cols-2 gap-4">
			<Field>
				<FieldLabel for={firstNameId}>First name</FieldLabel>
				<Input
					autocomplete="given-name"
					id={firstNameId}
					name="firstName"
					placeholder="John"
				/>
			</Field>
			<Field>
				<FieldLabel for={lastNameId}>Last name</FieldLabel>
				<Input
					autocomplete="family-name"
					id={lastNameId}
					name="lastName"
					placeholder="Doe"
				/>
			</Field>
		</div>
		<Field>
			<FieldLabel for={emailId}>Email</FieldLabel>
			<Input
				autocomplete="email"
				id={emailId}
				name="email"
				placeholder="johndoe@example.com"
				type="email"
			/>
		</Field>
		<Field>
			<FieldLabel for={phoneId}>Phone</FieldLabel>
			<Input
				autocomplete="tel"
				id={phoneId}
				name="phone"
				placeholder="+1 (555) 123-4567"
				type="tel"
			/>
		</Field>
		<Field>
			<FieldLabel for={messageId}>Message</FieldLabel>
			<Textarea autocomplete="off" id={messageId} name="message" placeholder="Your message" />
		</Field>
	</FieldGroup>
	<Button class="mt-8 w-full" type="button">Send message</Button>
</form>
