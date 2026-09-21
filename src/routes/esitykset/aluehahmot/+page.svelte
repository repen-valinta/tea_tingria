<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';

	import kissaTea from '$lib/assets/images/esitykset/kissa-tea.webp';
	import ImageWrapper from '$lib/components/shared/ImageWrapper.svelte';
	import kissaToinen from '$lib/assets/images/esitykset/kurnauskis.webp';
</script>

<main>
	<EsitysHeader header="Aluehahmot" />
	<EsitysSection
		sectionHeader="Kaipaatko tapahtumaasi ennemmin yleisön seassa liikkuvia hahmoja?"
		subHeader="Saanko esitellä, ledi kissat!"
		normalText
	>
		<div class="img-grid">
			<ImageWrapper src={kissaTea} alt="Ledikissa" title="Ledikissa Tea" fit="contain" />
			<ImageWrapper
				src={kissaToinen}
				alt="Toinen ledikissa"
				title="Toinen ledikissa"
				fit="contain"
			/>
		</div>
		<EsitysInfo
			info="Kissat liikkuvat yleisän seassa kujeillen ja vieraita leikkisästi kiusaten. Kissojen kanssa voi napata tapahtumassa ikimuistoisia kuvia, ja mikäli tilaan ja budjettiisi passaa, voivat kissat tehdä myös elegantisti saippuakuplia kissailun lomassa!"
		/>
	</EsitysSection>
</main>

<style>
	.img-grid {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		place-items: center;
		gap: 2rem;
		max-width: 1000px;
	}
</style>
