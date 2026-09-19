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
	<div class="text-wrapper wrapper">
		<p>
			Olen Tea Tingria- esiintyjä, sirkusohjaaja ja yrittäjä . Yhdistelen esityksissäni eri
			sirkuselementtejä uniikilla ja naisellisella tavalla, ja näyttävillä tunnelmanvaihdoksilla.
		</p>
		<p>
			Ohjaan ryhmäyttävänä toimintana vannetanssia ja sirkusta matalan kynnyksen lajikokeiluja,
			esimerkiksi polttareihin, tyhy-päiviin ja yksityistilaisuuksiin. Ohjaukset sujuvat myös
			varmalla otteella, ja pidän myös huolen siitä että ohjaukset ovat sopivantasoisia oppilaille,
			ja että tunnelma on hauska ja rento.
		</p>
		<p>
			"Oli ilo osallistua Tean työpajaan. Opetusta oli helppo seurata, ja tempuista löytyi
			variaatioita eritasoisille oppilaille. Tean opetustyyli on motivoiva ja hyvin suunniteltu, ja
			hänen ohjeistuksensa auttoivat paljon myös vaativampien temppujen opettelussa. " - Clara Jobs
		</p>
	</div>
</main>

<style>
	.text-wrapper {
		padding-block: 2rem;
		width: min(100%, 800px);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
