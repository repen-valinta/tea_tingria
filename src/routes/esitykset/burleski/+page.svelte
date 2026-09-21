<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
</script>

<main>
	<EsitysHeader header="Burleski" />
	<EsitysSection sectionHeader="Let's Misbehave">
		<EsitysInfo
			teaser="There’s something wild about you child that’s so contageous, let’s be outrageus, let’s misbehave!"
			info="
			Energinen ja pikkutuhma 20-luvun burleskinumero, jossa vaatteet vähenevät tyylikkäästi vannetemppujen kohinassa. Vuodesta 2019 esitetty, ja loppuunhiottu show joka ei jätä ketään kylmäksi."
			vaatimus="Tilavaatimus minimi 2x3m ja kesto 4:40 min"
		/>
	</EsitysSection>
	<EsitysSection sectionHeader="Control">
		<EsitysInfo
			teaser="I hope you enjoy this as much as I do. Are we ready? I am. Cause it's all about control. And I've got lots of it."
			info="Control on uniikki vanneburleskinumero joka pistää pistää päät pyörälle! Kasarityylinen sirkusburleskinumero Control on tarina itsenäisyydestä, sekä kurinalaisuuden ja leikin keskenäisestä tasapainosta."
			vaatimus="Tilavaatimus 3x3m, ja kesto 6 min"
		/>
	</EsitysSection>
</main>
