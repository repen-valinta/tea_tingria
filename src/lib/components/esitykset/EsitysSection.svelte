<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		sectionHeader: string;
		subHeader?: string;

		normalText?: boolean;
		children: Snippet;
	};

	let { sectionHeader, subHeader, children, normalText }: Props = $props();
</script>

<section class="esitys-section wrapper">
	<h2 class:normal-text={normalText}>{sectionHeader}</h2>

	{#if subHeader}
		<h3>{subHeader}</h3>
	{/if}

	{@render children()}
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
		width: 95%;

		&:not(:first-child) {
			padding-top: 1rem;
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

	.normal-text {
		/* font-family: var(--font-body); */
		text-transform: uppercase;
	}
</style>
