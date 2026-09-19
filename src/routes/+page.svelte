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
	<div class="home-header wrapper">
		<h1>Olen Tea Tingria</h1>
		<h2>-esiintyjä, sirkusohjaaja ja yrittäjä</h2>
	</div>
	<p class="bigger-text text-center-balance text-wrapper wrapper">
		Yhdistelen esityksissäni eri sirkuselementtejä uniikilla ja naisellisella tavalla, ja
		näyttävillä tunnelmanvaihdoksilla.
	</p>
	<div class="wrapper text-wrapper">
		<p>
			Ohjaan ryhmäyttävänä toimintana vannetanssia ja sirkusta matalan kynnyksen lajikokeiluja,
			esimerkiksi polttareihin, tyhy-päiviin ja yksityistilaisuuksiin. Ohjaukset sujuvat myös
			varmalla otteella, ja pidän myös huolen siitä että ohjaukset ovat sopivantasoisia oppilaille,
			ja että tunnelma on hauska ja rento.
		</p>
		<div class="testimonial bigger-text">
			"Oli ilo osallistua Tean työpajaan. Opetusta oli helppo seurata, ja tempuista löytyi
			variaatioita eritasoisille oppilaille. Tean opetustyyli on motivoiva ja hyvin suunniteltu, ja
			hänen ohjeistuksensa auttoivat paljon myös vaativampien temppujen opettelussa."
			<p>- Clara Jobs</p>
		</div>
	</div>
</main>

<style>
	.home-header {
		text-wrap: balance;
		text-align: center;
		display: flex;
		flex-direction: column;
		padding: 2rem 0 1.5rem;
	}

	.testimonial {
		border: 1px solid var(--accent-base);
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

		@media (width <= 680px) {
			font-size: 1.25rem;
			padding: 0.75rem 1.5rem;
		}

		& p {
			text-align: center;
		}
	}
</style>
