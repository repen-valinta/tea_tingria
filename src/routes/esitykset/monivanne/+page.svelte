<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
</script>

<main>
	<EsitysHeader header="Monivanne" />
	<EsitysSection
		sectionHeader="Bangarang"
		video={{
			source: '/video/monivanne/bangarang.mp4',
			poster: ''
		}}
		info="'Bangarang' on kaikista uusin ja raikkain numero ja energinen pläjäys vuosien varrelta koottuja lempitemppuja. Tunnelma vaihtuu tummanpuhuvasta dynaamiseen ja näyttävään lopetukseen vanteiden määrän kasvaessa maksimiin!"
		vaatimus="Tilavaatimus minimi 3x3m, kesto 3:30 min"
	/>
</main>
