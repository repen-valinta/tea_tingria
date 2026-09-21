<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
	import VideoComponent from '$lib/components/shared/VideoComponent.svelte';
</script>

<svelte:head>
	<title>Tuliesitykset - Tea Tingria</title>
	<meta name="description" content="Näyttävät tulishowt isoilla liekeillä!" />
</svelte:head>

<main>
	<EsitysHeader header="Tuliesitykset" />
	<div class="wrapper">
		<VideoComponent source="/video/tuli/fire-teaser.mp4" poster="" />
	</div>
	<EsitysSection sectionHeader="Quattro">
		<EsitysInfo
			info="Mieleenpainuva tulishow Quattro on yhden naisen soolotulishow isoilla liekeillä ja vahvoilla tunnelmanvaihdoksilla."
			extraInfo="Quattro pohdiskelee aikaansaamisen ja pysähtymisen tasapainoa suhteessa elämään ja ihmissuhteisiin. Esityksen tunnelma vaihtuu jännittävän mesmeroivasta, dramaattiseen ja vahvaan lyriikoiden tulkintaan, ja huipentuu energiseen kipinöivään tuplavanne lopetukseen."
			vaatimus="Esitys on katsottavissa eri suunnista. Tilavaatimuksena 8x8m alue jossa ei ole lähettyvillä syttyviä materiaaleja. Esityksen kesto 10 min."
		/>
	</EsitysSection>

	<EsitysSection sectionHeader="Tulisirkus">
		<EsitysInfo
			info="Tulisirkus on tyylikäs, ajaton ja hyväntuulinen sirkusesitys jossa välineinä tuliviuhkat ja tulivanteita."
			vaatimus="Tilavaatimus 6x7m alue jossa ei ole lähettyvillä syttyviä materiaaleja. Esityksen kesto n. 7 min."
		/>
	</EsitysSection>
</main>
