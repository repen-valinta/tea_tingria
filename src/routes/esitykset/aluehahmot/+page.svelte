<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';

	import kissaTea from '$lib/assets/images/esitykset/kissa-tea.webp';
	import ImageWrapper from '$lib/components/shared/ImageWrapper.svelte';
	import kissaToinen from '$lib/assets/images/esitykset/kurnauskis.webp';
	import ImageGrid from '$lib/components/shared/ImageGrid.svelte';
</script>

<svelte:head>
	<title>Aluehahmot - Tea Tingria</title>
	<meta name="description" content="Ledi kissat tuovat tapahtumiin leikkisää tunnelmaa!" />
</svelte:head>

<main>
	<EsitysHeader header="Aluehahmot" />
	<EsitysSection
		sectionHeader="Kaipaatko tapahtumaasi ennemmin yleisön seassa liikkuvia hahmoja?"
		subHeader="Saanko esitellä, ledi kissat!"
		normalText
	>
		<ImageGrid>
			<ImageWrapper src={kissaTea} alt="Ledikissa" title="Ledikissa Tea" fit="contain" />
			<ImageWrapper
				src={kissaToinen}
				alt="Toinen ledikissa"
				title="Toinen ledikissa"
				fit="contain"
			/>
		</ImageGrid>
		<EsitysInfo
			info="Kissat liikkuvat yleisän seassa kujeillen ja vieraita leikkisästi kiusaten. Kissojen kanssa voi napata tapahtumassa ikimuistoisia kuvia, ja mikäli tilaan ja budjettiisi passaa, voivat kissat tehdä myös elegantisti saippuakuplia kissailun lomassa!"
		/>
	</EsitysSection>
</main>
