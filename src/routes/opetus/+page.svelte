<script>
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
</script>

<main>
	<div class="opetus-content wrapper">
		<h1>opetus</h1>
		<EsitysSection
			sectionHeader="Vannetyöpaja"
			info="Päälajini sirkuksessa on hulavanne, jonka ansiosta löysin itseni sirkuksen maailmaan. Teen sekä vannetanssia että sirkusvannetta, mikä tekee osaamisskaalani laajaksi lajissa joka on helposti lähestyttävä ja hauska. Mainitsen vielä tärkeimpänä kirsikkana kakun päällä, että olen erityisen taitava vanteen peruspyörityksen opettamisessa, ja tuon mukanani lajin opettamiseen top notch vanteet jolloin onnistumisprosentti on lähes sata."
		/>
		<EsitysSection
			sectionHeader="Sirkustyöpaja"
			info="Vannetanssin lisäksi ohjaan matalalla kynnyksellä jongleerausta, sekä helppoa akrobatiaa. Lajikokeiluun tai tyhypäivään sisältyy myös yhteydentunnetta nostattavaa lämmittelyjä ja leikkejä josta nauru raikaa! Sirkuksesta löytyy kaikille jotain mistä saa onnistumisen kokemusra, minkä ansiosta sirkus on oiva tapa pitää hauskaa ja luoda yhteenkuuluvuudentunnetta esimerkiksi työporukan kesken. Et tarvitse aiempaa kokemusta, ja saat olla niin vähän tai paljon esillä kuin itsellesi tuntuu hyvältä."
		/>
	</div>
</main>

<style>
	.opetus-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-block: 2rem;
	}
</style>
