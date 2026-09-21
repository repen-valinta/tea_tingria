<script lang="ts">
	import VideoComponent from '../shared/VideoComponent.svelte';

	type videoProps = {
		source: string;
		poster: string;
	};
	type Props = {
		sectionHeader: string;
		subHeader?: string;
		teaser?: string;
		info: string;
		extraInfo?: string;
		vaatimus?: string;
		video?: videoProps;
	};

	let { sectionHeader, subHeader, teaser, info, extraInfo, vaatimus, video }: Props = $props();
</script>

<section class="esitys-section wrapper">
	<h2>{sectionHeader}</h2>

	{#if subHeader}
		<h3>{subHeader}</h3>
	{/if}

	{#if video}
		<VideoComponent source={video.source} poster={video.poster} />
	{/if}

	<div class="esitys-section-content bigger-text-sm">
		{#if teaser}
			<p class="esitys-teaser">
				<em>{teaser}</em>
			</p>
		{/if}

		<p class="esitys-info">
			{info}
		</p>

		{#if extraInfo}
			<p class="esitys-info">
				{extraInfo}
			</p>
		{/if}

		{#if vaatimus}
			<div class="esitys-vaatimus">
				{vaatimus}
			</div>
		{/if}
	</div>
</section>

<style>
	.esitys-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding-top: 1rem;
		padding-bottom: 3rem;
		width: 100%;

		&:not(:first-child) {
			padding-top: 2rem;
		}

		&:not(:last-child) {
			border-bottom: 1px solid rgb(from var(--accent-light) r g b / 0.125);
		}

		& h2,
		h3 {
			max-width: 800px;
			text-wrap: balance;
			text-align: center;
		}
	}

	.esitys-section-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		text-wrap: pretty;
	}

	.esitys-teaser {
		text-wrap: balance;
		text-align: center;
	}

	.esitys-info,
	.esitys-teaser,
	.esitys-vaatimus {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: min(100%, 1000px);
		text-wrap: pretty;
	}

	.esitys-vaatimus {
		color: var(--text-light-muted);
		text-align: center;
		text-wrap: balance;
		font-size: 0.95em;
		font-weight: 300;
		padding-top: 1rem;
	}
</style>
