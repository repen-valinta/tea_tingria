<script>
	import CtaButton from '$lib/components/ui/CtaButton.svelte';
	import TextInput from '$lib/components/ui/inputs/TextInput.svelte';
	import TextInputWrapper from '$lib/components/ui/inputs/TextInputWrapper.svelte';
</script>

<svelte:head>
	<title>Yhteystiedot - Tea Tingria</title>
	<meta
		name="description"
		content="Ota rohkeasti yhteyttä! Keikkapyynnöt, risut, ruusut ihan mitä vain."
	/>
</svelte:head>

<main>
	<div class="yhteystiedot-content wrapper">
		<h1>yhteystiedot</h1>
		<div class="contact-form-wrapper">
			<div class="contact-form-header">
				<h2>Yhteydenottolomake</h2>
				<p>
					Haluatko kysyä lisää palveluistani, tai toivoisitko ennemmin tarjouspyynnön tapahtumaasi?
				</p>
				<p>Täytä alla oleva lomake, niin palaan asiaan mahdollisimman pian!</p>
			</div>
			<form class="contact-form">
				<TextInputWrapper label="nimi" inputName="nimi">
					<TextInput type="text" placeholder="Nimi" name="nimi" required />
				</TextInputWrapper>

				<TextInputWrapper label="email" inputName="email">
					<TextInput type="email" placeholder="sähköposti" name="email" required />
				</TextInputWrapper>

				<TextInputWrapper label="viesti" inputName="viesti">
					<textarea placeholder="Viesti" name="viesti" rows="8" required></textarea>
				</TextInputWrapper>

				<CtaButton text="Lähetä" />
			</form>
		</div>
	</div>
</main>

<style>
	.yhteystiedot-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-block: 2rem;
		gap: 1rem;

		& h1 {
			font-size: 2rem;
		}

		& h2 {
			font-size: 1.25rem;
		}
	}

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
	}
</style>
