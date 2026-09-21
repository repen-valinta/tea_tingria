<script>
	import EsitysHeader from '$lib/components/esitykset/EsitysHeader.svelte';
	import EsitysInfo from '$lib/components/esitykset/EsitysInfo.svelte';
	import EsitysSection from '$lib/components/esitykset/EsitysSection.svelte';
	import VideoComponent from '$lib/components/shared/VideoComponent.svelte';
</script>

<svelte:head>
	<title>Monivanne - Tea Tingria</title>
	<meta name="description" content="Raikas esitys monella vanteella." />
</svelte:head>

<main>
	<EsitysHeader header="Monivanne" />
	<div class="wrapper">
		<VideoComponent source="/video/monivanne/bangarang.mp4" poster="" />
	</div>
	<EsitysSection sectionHeader="Bangarang">
		<EsitysInfo
			info="'Bangarang' on kaikista uusin ja raikkain numero ja energinen pläjäys vuosien varrelta koottuja lempitemppuja. Tunnelma vaihtuu tummanpuhuvasta dynaamiseen ja näyttävään lopetukseen vanteiden määrän kasvaessa maksimiin!"
			vaatimus="Tilavaatimus minimi 3x3m, kesto 3:30 min"
		/>
	</EsitysSection>
</main>
