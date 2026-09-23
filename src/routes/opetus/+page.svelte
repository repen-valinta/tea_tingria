<script>
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
	import ImageWrapper from '$lib/components/shared/ImageWrapper.svelte';

	import opetus from '$lib/assets/images/opetus_etusivu.webp';
</script>

<svelte:head>
	<title>Opetus - Tea Tingria</title>
	<meta
		name="description"
		content="Hulavannetyöpajoja sekä matalan kynnyksen sirkustyöpajoja ryhmille, tyhypäiviin, polttareihin ja erilaisiin tapahtumiin."
	/>
</svelte:head>

<main>
	<div class="opetus-content wrapper">
		<h1>opetus</h1>
		<div class="opetus-container">
			<div class="opetus-kuva">
				<ImageWrapper
					src={opetus}
					alt="Vanne- ja sirkustyöpaja opettajanne"
					title="Vanne- ja sirkustyöpajat kaikille"
					fit="contain"
				/>
			</div>
			<div class="opetus-text">
				<EsitysSection sectionHeader="Vannetyöpaja">
					<EsitysInfo
						info="Päälajini sirkuksessa on hulavanne, jonka ansiosta löysin itseni sirkuksen maailmaan. Teen sekä vannetanssia että sirkusvannetta, mikä tekee osaamisskaalani laajaksi lajissa joka on helposti lähestyttävä ja hauska. Mainitsen vielä tärkeimpänä kirsikkana kakun päällä, että olen erityisen taitava vanteen peruspyörityksen opettamisessa, ja tuon mukanani lajin opettamiseen top notch vanteet jolloin onnistumisprosentti on lähes sata."
					/>
				</EsitysSection>
				<EsitysSection sectionHeader="Sirkustyöpaja">
					<EsitysInfo
						info="Vannetanssin lisäksi ohjaan matalalla kynnyksellä jongleerausta, sekä helppoa akrobatiaa. Lajikokeiluun tai tyhypäivään sisältyy myös yhteydentunnetta nostattavaa lämmittelyjä ja leikkejä josta nauru raikaa! Sirkuksesta löytyy kaikille jotain mistä saa onnistumisen kokemusta, minkä ansiosta sirkus on oiva tapa pitää hauskaa ja luoda yhteenkuuluvuudentunnetta esimerkiksi työporukan kesken. Et tarvitse aiempaa kokemusta, ja saat olla niin vähän tai paljon esillä kuin itsellesi tuntuu hyvältä."
					/>
				</EsitysSection>
			</div>
		</div>
	</div>
</main>

<style>
	.opetus-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-block: 2rem;
		gap: 1rem;
	}

	.opetus-container {
		display: grid;
		grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
		gap: 1rem;
		align-items: center;
		width: 100%;

		@media (width <= 1200px) {
			grid-template-columns: 1fr;
		}
	}

	.opetus-kuva {
		width: 100%;
		min-width: 0;
		display: flex;
		justify-content: center;
	}

	.opetus-text {
		min-width: 0;
	}
</style>
