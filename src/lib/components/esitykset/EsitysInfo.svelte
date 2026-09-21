<script lang="ts">
	type Props = {
		teaser?: string;
		info: string;
		extraInfo?: string;
		vaatimus?: string;
	};

	let { teaser, info, extraInfo, vaatimus }: Props = $props();
</script>

<section class="esitys-section-content bigger-text-sm">
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
</section>

<style>
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
