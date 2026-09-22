<script>
	import CtaButton from '$lib/components/ui/CtaButton.svelte';
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
				<h2>Ota yhteyttä ? Keikkapyynnöt?? Joku kiva teksti tähän.</h2>
			</div>
			<form class="contact-form">
				<div class="text-input-container">
					<label for="nimi">Nimi</label>
					<input type="text" placeholder="nimi" name="nimi" required />
				</div>
				<div class="text-input-container">
					<label for="email">Sähköposti</label>
					<input type="email" placeholder="sähköposti" name="email" required />
				</div>
				<div class="text-input-container">
					<label for="viesti">Viesti</label>
					<textarea placeholder="name" name="viesti" rows="8" required></textarea>
				</div>
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
			font-size: 1.5rem;
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
	}

	.contact-form-header {
		padding: 2rem;
		background: rgb(from var(--neutral-xxdark) r g b / 0.75);
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

	.text-input-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		& label {
			font-size: 0.925rem;
			padding-left: 0.25rem;
		}

		& input {
			width: 100%;
			padding: 0.75rem;
			border-radius: var(--radius-m);
			font-size: 0.975rem;
			border: 1px solid transparent;
		}

		& textarea {
			resize: vertical;
			width: 100%;
			padding: 0.75rem;
			border: 1px solid transparent;

			border-radius: var(--radius-m);
			font-size: 0.975rem;
		}
	}
</style>
