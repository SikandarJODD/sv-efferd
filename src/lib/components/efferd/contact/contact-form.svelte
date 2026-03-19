<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';

	import { Field, FieldGroup, FieldLabel } from '$lib/components/ui/field';
</script>

<form class="w-full">
	<FieldGroup>
		<div class="grid grid-cols-2 gap-4">
			<Field>
				<FieldLabel for="first-name">First name</FieldLabel>
				<Input autocomplete="off" id="first-name" placeholder="John" />
			</Field>
			<Field>
				<FieldLabel for="last-name">Last name</FieldLabel>
				<Input autocomplete="off" id="last-name" placeholder="Doe" />
			</Field>
		</div>
		<Field>
			<FieldLabel for="email">Email</FieldLabel>
			<Input autocomplete="off" id="email" placeholder="johndoe@example.com" type="email" />
		</Field>
		<Field>
			<FieldLabel for="phone">Phone</FieldLabel>
			<Input autocomplete="off" id="phone" placeholder="+1 (555) 123-4567" type="tel" />
		</Field>
		<Field>
			<FieldLabel for="message">Message</FieldLabel>
			<Textarea autocomplete="off" id="message" placeholder="Your message" />
		</Field>
	</FieldGroup>
	<Button class="mt-8 w-full" type="button">Submit</Button>
</form>
