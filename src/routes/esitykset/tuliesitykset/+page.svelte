<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
	import Tilavaatimus from '$lib/components/esitykset/Tilavaatimus.svelte';
	import ImageWrapper from '$lib/components/shared/ImageWrapper.svelte';
	import VideoComponent from '$lib/components/shared/VideoComponent.svelte';
	import ImageGrid from '$lib/components/shared/ImageGrid.svelte';

	import sytytys2 from '$lib/assets/images/esitykset/tuliesitykset/sytytys2.webp';
	import paras from '$lib/assets/images/esitykset/tuliesitykset/paras.webp';
	// import lanteilla from '$lib/assets/images/esitykset/tuliesitykset/lanteilla.webp';
	import sytytys_hyva from '$lib/assets/images/esitykset/tuliesitykset/sytytys_hyva.webp';
</script>

<svelte:head>
	<title>Tuliesitykset - Tea Tingria</title>
	<meta name="description" content="Näyttävät tulishowt isoilla liekeillä!" />
</svelte:head>

<main>
	<EsitysHeader header="Tuliesitykset" />
	<EsitysSection sectionHeader="Quattro">
		<ImageWrapper src={sytytys2} alt="Nyt syttyy!" title="Nyt syttyy!" />
		<EsitysInfo
			info="Mieleenpainuva tulishow Quattro on yhden naisen soolotulishow isoilla liekeillä ja vahvoilla tunnelmanvaihdoksilla."
			extraInfo="Quattro pohdiskelee aikaansaamisen ja pysähtymisen tasapainoa suhteessa elämään ja ihmissuhteisiin. Esityksen tunnelma vaihtuu jännittävän mesmeroivasta, dramaattiseen ja vahvaan lyriikoiden tulkintaan, ja huipentuu energiseen kipinöivään tuplavanne lopetukseen."
		/>
		<ImageGrid>
			<ImageWrapper src={paras} alt="Ylhäällä" title="Ylhäällä" height="400px" />
			<ImageWrapper src={sytytys_hyva} alt="Syttyy taas" title="Syttyy taas" height="400px" />
		</ImageGrid>
		<Tilavaatimus
			vaatimus="Esitys on katsottavissa eri suunnista. Tilavaatimuksena 8x8m alue jossa ei ole lähettyvillä syttyviä materiaaleja. Esityksen kesto 10 min."
		/>
	</EsitysSection>

	<EsitysSection sectionHeader="Tulisirkus">
		<VideoComponent source="/video/tuli/fire-teaser.mp4" poster="" />

		<EsitysInfo
			info="Tulisirkus on tyylikäs, ajaton ja hyväntuulinen sirkusesitys jossa välineinä tuliviuhkat ja tulivanteita."
		/>
		<Tilavaatimus
			vaatimus="Tilavaatimus 6x7m alue jossa ei ole lähettyvillä syttyviä materiaaleja. Esityksen kesto n. 7 min."
		/>
	</EsitysSection>
</main>
