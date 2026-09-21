<script lang="ts">
	import { subLinks } from '$lib/data/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	type Props = {
		header: string;
	};

	let { header }: Props = $props();
</script>

<section class="esitys-header wrapper">
	<h1>{header}</h1>
	<ul class="esitys-header-links">
		{#each subLinks as subLink (subLink.to)}
			<li>
				<a
					href={resolve(subLink.to)}
					aria-current={page.route.id === subLink.to ? 'page' : undefined}
				>
					{subLink.link}
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.esitys-header {
		padding: 2rem 0 0.25rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.esitys-header-links {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 1.25rem;
		row-gap: 0.5rem;
		font-size: 0.95em;
		width: 100%;

		& a {
			&:hover {
				color: var(--accent-xlight);
			}

			&[aria-current='page'] {
				color: var(--accent-xlight);
				font-weight: 600;
			}
		}
	}
</style>
