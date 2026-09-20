<script lang="ts">
	import Video from '$lib/components/home/Video.svelte';
</script>

<svelte:head>
	<title>Tea Tingria</title>
	<meta name="description" content="Sirkusohjaaja, esiintyjä ja yrittäjä." />

	<link rel="preload" as="image" href="/video/hero-poster.webp" fetchpriority="high" />
</svelte:head>

<main class="home-page">
	<Video />
	<div class="home-page-content">
		<div class="home-header">
			<h1>Olen Tea Tingria</h1>
			<h2>-esiintyjä, sirkusohjaaja ja yrittäjä</h2>
		</div>
		<p class="text-wrapper text-center-balance bigger-text wrapper">
			Yhdistelen esityksissäni eri sirkuselementtejä uniikilla ja naisellisella tavalla, ja
			näyttävillä tunnelmanvaihdoksilla.
		</p>
		<div class="text-wrapper wrapper">
			<p>
				Ohjaan ryhmäyttävänä toimintana vannetanssia ja sirkusta matalan kynnyksen lajikokeiluja,
				esimerkiksi polttareihin, tyhy-päiviin ja yksityistilaisuuksiin. Ohjaukset sujuvat myös
				varmalla otteella, ja pidän myös huolen siitä että ohjaukset ovat sopivantasoisia
				oppilaille, ja että tunnelma on hauska ja rento.
			</p>
			<div class="testimonial bigger-text">
				<p>
					"Oli ilo osallistua Tean työpajaan. Opetusta oli helppo seurata, ja tempuista löytyi
					variaatioita eritasoisille oppilaille. Tean opetustyyli on motivoiva ja hyvin suunniteltu,
					ja hänen ohjeistuksensa auttoivat paljon myös vaativampien temppujen opettelussa."
				</p>
				<p class="testimonial-name">- Clara Jobs</p>
			</div>
		</div>
	</div>
</main>

<style>
	.home-header {
		text-wrap: balance;
		text-align: center;
		display: flex;
		flex-direction: column;
		padding: 2rem 1.5rem 1.5rem;
	}

	.home-page-content {
		position: relative;
		background: var(--bg);
	}

	.testimonial {
		border-radius: var(--radius-m);
		background-color: var(--accent-xlight);
		font-style: italic;
		text-wrap: balance;
		padding: 1rem 2rem;
		font-weight: 500;
		color: var(--text-dark);
		margin-top: 1.5rem;
		text-align: center;
		font-size: 1.35rem;
		margin: 1.5rem auto 0;
		box-shadow:
			inset 4px 4px 16px rgb(from white r g b / 0.5),
			4px 4px 16px rgb(from var(--accent-xlight) r g b / 0.5);

		@media (width <= 680px) {
			font-size: 1.25rem;
			padding: 0.75rem 1.5rem;
		}

		& p {
			text-align: center;
		}
	}

	.testimonial-name {
		color: var(--text-dark-muted);
	}
</style>
