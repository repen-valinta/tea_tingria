<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
</script>

<main>
	<EsitysHeader header="Tuliesitykset" />
	<EsitysSection
		sectionHeader="Quattro"
		video={{
			source: '/video/tuli/fire-teaser.mp4',
			poster: ''
		}}
		info="Mieleenpainuva tulishow Quattro on yhden naisen soolotulishow isoilla liekeillä ja vahvoilla tunnelmanvaihdoksilla."
		extraInfo="Quattro pohdiskelee aikaansaamisen ja pysähtymisen tasapainoa suhteessa elämään ja ihmissuhteisiin. Esityksen tunnelma vaihtuu jännittävän mesmeroivasta, dramaattiseen ja vahvaan lyriikoiden tulkintaan, ja huipentuu energiseen kipinöivään tuplavanne lopetukseen."
		vaatimus="Esitys on katsottavissa eri suunnista. Tilavaatimuksena 8x8m alue jossa ei ole lähettyvillä syttyviä materiaaleja. Esityksen kesto 10 min."
	/>
	<EsitysSection
		sectionHeader="Tulisirkus"
		info="Tulisirkus on tyylikäs, ajaton ja hyväntuulinen sirkusesitys jossa välineinä tuliviuhkat ja tulivanteita."
		vaatimus="Tilavaatimus 6x7m alue jossa ei ole lähettyvillä syttyviä materiaaleja. Esityksen kesto n. 7 min."
	/>
</main>
