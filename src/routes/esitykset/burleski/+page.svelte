<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
	import ImageWrapper from '$lib/components/shared/ImageWrapper.svelte';
	import Tilavaatimus from '$lib/components/esitykset/Tilavaatimus.svelte';

	import misbehave1 from '$lib/assets/images/esitykset/burleski/misbehave1.webp';
	import misbehave2 from '$lib/assets/images/esitykset/burleski/misbehave2.webp';
	import misbehave3 from '$lib/assets/images/esitykset/burleski/misbehave3.webp';
	import control_wide from '$lib/assets/images/esitykset/burleski/control-wide.webp';
	import control1 from '$lib/assets/images/esitykset/burleski/control1.webp';
	import control2 from '$lib/assets/images/esitykset/burleski/control2.webp';
	import ImageGrid from '$lib/components/shared/ImageGrid.svelte';
</script>

<svelte:head>
	<title>Burleski - Tea Tingria</title>
	<meta name="description" content="Tyylikkäät, energiset ja pikkutuhmat burleskinumerot!" />
</svelte:head>

<main>
	<EsitysHeader header="Burleski" />
	<EsitysSection sectionHeader="Let's Misbehave">
		<ImageWrapper src={misbehave2} alt="Let's misbehave" title="Let's misbehave" cover />
		<EsitysInfo
			teaser="There’s something wild about you child that’s so contageous, let’s be outrageus, let’s misbehave!"
			info="
			Energinen ja pikkutuhma 20-luvun burleskinumero, jossa vaatteet vähenevät tyylikkäästi vannetemppujen kohinassa. Vuodesta 2019 esitetty, ja loppuunhiottu show joka ei jätä ketään kylmäksi."
		/>
		<ImageGrid>
			<ImageWrapper
				src={misbehave1}
				alt="Let's misbehave some more"
				title="Let's misbehave some more"
			/>
			<ImageWrapper
				src={misbehave3}
				alt="Let's misbehave some more x2"
				title="Let's misbehave some more x2"
			/>
		</ImageGrid>
		<Tilavaatimus vaatimus="Tilavaatimus minimi 2x3m ja kesto 4:40 min" />
	</EsitysSection>
	<EsitysSection sectionHeader="Control">
		<ImageWrapper src={control_wide} alt="Control" title="Control" />
		<EsitysInfo
			teaser="I hope you enjoy this as much as I do. Are we ready? I am. Cause it's all about control. And I've got lots of it."
			info="Control on uniikki vanneburleskinumero joka pistää pistää päät pyörälle! Kasarityylinen sirkusburleskinumero Control on tarina itsenäisyydestä, sekä kurinalaisuuden ja leikin keskenäisestä tasapainosta."
		/>
		<ImageGrid>
			<ImageWrapper src={control1} alt="control 2" title="control 2" />
			<ImageWrapper src={control2} alt="control 3" title="control 3" />
		</ImageGrid>
		<Tilavaatimus vaatimus="Tilavaatimus 3x3m, ja kesto 6 min" />
	</EsitysSection>
</main>
