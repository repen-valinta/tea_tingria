<script>
	import CtaButton from '$lib/components/ui/CtaButton.svelte';
	import FacebookIcon from '$lib/components/ui/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/ui/icons/InstagramIcon.svelte';
	import LinkedInIcon from '$lib/components/ui/icons/LinkedInIcon.svelte';
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
		<section class="yritystiedot">
			<h3>Yritystiedot</h3>
			<p>Tmi Tea Tingria</p>
			<p>Pulttitie 16 A PL7</p>
			<p>00880 Helsinki</p>
			<p>y-tunnus: 2891833-1</p>
			<p class="puh">puh: 045 611 6995</p>
			<div class="yritys-links">
				<a href="https://www.instagram.com/teatingria/" target="_blank">
					<div class="icon-wrap">
						<InstagramIcon aria-hidden="true" strokeWidth="0.85" />
					</div>
					<p>Instagram</p></a
				>
				<a href="https://www.facebook.com/TeaTingria/" target="_blank">
					<div class="icon-wrap">
						<FacebookIcon aria-hidden="true" strokeWidth="0.85" />
					</div>
					<p>Facebook</p></a
				>
				<a href="https://fi.linkedin.com/in/tea-tingria-2b0938162" target="_blank">
					<div class="icon-wrap">
						<LinkedInIcon aria-hidden="true" strokeWidth="0.85" />
					</div>
					<p>LinkedIn</p></a
				>
			</div>
		</section>
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

	.yritystiedot {
		display: flex;
		flex-direction: column;
		width: min(100%, 600px);
	}

	.puh {
		margin-top: 1rem;
	}

	.yritys-links {
		display: flex;
		margin-top: 0.5rem;
		gap: 1rem;

		@media (width <= 580px) {
			flex-direction: column;
			gap: 0.5rem;
		}

		& a {
			display: flex;
			align-items: center;
			gap: 0 0.25rem;

			&:hover {
				color: var(--accent-xlight);
			}

			& p {
				transform: translateY(2px);
			}
		}
	}

	.icon-wrap {
		height: 1.75cap;
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
