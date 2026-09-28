<script lang="ts">
	import { enhance } from '$app/forms';

	import CtaButton from '$lib/components/ui/CtaButton.svelte';
	import TextInput from '$lib/components/ui/inputs/TextInput.svelte';
	import TextInputWrapper from '$lib/components/ui/inputs/TextInputWrapper.svelte';

	type FormState = {
		success?: boolean;
		sendError?: string;

		errors?: {
			nimi?: string;
			email?: string;
			viesti?: string;
		};
		values?: {
			nimi: string;
			email: string;
			viesti: string;
		};
	} | null;

	type Props = {
		form?: FormState;
	};

	let { form }: Props = $props();

	let isSubmitting = $state(false);
</script>

<div class="contact-form-wrapper">
	<div class="contact-form-header">
		<h2>Yhteydenottolomake</h2>
		<p>Haluatko kysyä lisää palveluistani, tai toivoisitko ennemmin tarjouspyynnön tapahtumaasi?</p>
		<p>Täytä alla oleva lomake, niin palaan asiaan mahdollisimman pian!</p>
	</div>

	<form
		method="POST"
		class="contact-form"
		aria-busy={isSubmitting}
		use:enhance={() => {
			isSubmitting = true;

			return async ({ update }) => {
				try {
					await update();
				} finally {
					isSubmitting = false;
				}
			};
		}}
	>
		<TextInputWrapper label="nimi" inputName="nimi">
			<TextInput
				type="text"
				placeholder="Nimi"
				name="nimi"
				id="nimi"
				value={form?.values?.nimi ?? ''}
				aria-invalid={form?.errors?.nimi ? 'true' : undefined}
				aria-describedby={form?.errors?.nimi ? 'nimi-error' : undefined}
				required
			/>

			{#if form?.errors?.nimi}
				<p id="nimi-error" class="input-error" role="alert">
					{form.errors.nimi}
				</p>
			{/if}
		</TextInputWrapper>

		<TextInputWrapper label="email" inputName="email">
			<TextInput
				type="email"
				placeholder="Sähköposti"
				name="email"
				id="email"
				value={form?.values?.email ?? ''}
				aria-invalid={form?.errors?.email ? 'true' : undefined}
				aria-describedby={form?.errors?.email ? 'email-error' : undefined}
				required
			/>

			{#if form?.errors?.email}
				<p id="email-error" class="input-error" role="alert">{form.errors.email}</p>
			{/if}
		</TextInputWrapper>

		<TextInputWrapper label="viesti" inputName="viesti">
			<textarea
				placeholder="Viesti"
				name="viesti"
				id="viesti"
				rows="8"
				aria-invalid={form?.errors?.viesti ? 'true' : undefined}
				aria-describedby={form?.errors?.viesti ? 'viesti-error' : undefined}
				required>{form?.values?.viesti ?? ''}</textarea
			>

			{#if form?.errors?.viesti}
				<p id="viesti-error" class="input-error" role="alert">{form.errors.viesti}</p>
			{/if}
		</TextInputWrapper>

		<div class="honeypot" aria-hidden="true">
			<label for="website">Website</label>
			<input
				id="website"
				name="website"
				type="text"
				tabindex="-1"
				autocomplete="off"
				data-testid="contact-honeypot"
			/>
		</div>

		{#if form?.success}
			<p class="form-success" role="status" aria-live="polite">Viesti lähetetty!</p>
		{/if}

		{#if form?.sendError}
			<p class="input-error" role="alert">{form.sendError}</p>
		{/if}

		<CtaButton
			type="submit"
			disabled={isSubmitting}
			text={isSubmitting ? 'Lähetetään...' : 'Lähetä'}
		/>
	</form>
</div>

<style>
	.contact-form-wrapper {
		width: min(100%, 600px);
		border: 1px solid rgb(from var(--accent-light) r g b / 0.125);
		overflow: hidden;
		border-radius: var(--radius-l);
		backdrop-filter: blur(4px);
		display: flex;
		flex-direction: column;
		background: rgb(from var(--neutral-xxdark) r g b / 0.5);
		box-shadow: var(--shadow-s);
	}

	.contact-form-header {
		padding: 1.5rem;
		background: rgb(from var(--neutral-xxdark) r g b / 0.75);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
		text-wrap: balance;
		text-align: center;

		& h2 {
			font-size: 1.25rem;
		}
	}

	.contact-form {
		border-top: 1px solid rgb(from var(--accent-light) r g b / 0.125);
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		@media (width <= 680px) {
			padding-inline: 1.5rem;
		}
	}

	textarea {
		font-family: var(--font-body);

		resize: vertical;
		width: 100%;
		padding: 0.75rem;
		border: 1px solid transparent;

		border-radius: var(--radius-m);
		font-size: 0.975rem;
		outline: none;
		caret-color: var(--accent-light);

		&:focus-visible {
			border: 2px solid var(--accent-light);
		}
	}

	.input-error {
		font-size: 0.875em;
		padding: 0.25rem 0.5rem;
		color: var(--color-error);
	}

	.honeypot {
		position: absolute;
		left: -10000px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.form-success {
		border: 2px solid var(--color-success-border);
		border-radius: var(--radius-m);
		color: var(--color-success-text);
		background-color: var(--color-success-bg);
		padding: 0.5rem 1rem;
	}
</style>
