<script lang="ts">
	import AvatarField from "./avatar-field.svelte";
	import DeleteAccountField from "./delete-account-field.svelte";
	import EmailField from "./email-field.svelte";
	import NameField from "./name-field.svelte";
	import UserIdField from "./user-id-field.svelte";
</script>

<div class="flex flex-col gap-6">
	<NameField />
	<EmailField />
	<AvatarField />
	<UserIdField />
	<DeleteAccountField />
</div>
