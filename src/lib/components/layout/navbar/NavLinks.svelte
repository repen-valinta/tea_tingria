<script lang="ts">
	import EsityksetDropdown from './EsityksetDropdown.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { onNavigate }: { onNavigate?: () => void } = $props();

	const navLinks = [
		{
			to: '/',
			link: 'Etusivu'
		},
		{
			to: '/opetus',
			link: 'Opetus'
		},
		{
			to: '/yhteystiedot',
			link: 'Yhteystiedot'
		}
	] as const;
</script>

<ul class="nav-links">
	{#each navLinks as navLink (navLink.to)}
		{#if navLink.to === '/opetus'}
			<EsityksetDropdown {onNavigate} />
		{/if}
		<li>
			<a
				href={resolve(navLink.to)}
				onclick={() => onNavigate?.()}
				aria-current={page.route.id === navLink.to ? 'page' : undefined}>{navLink.link}</a
			>
		</li>
	{/each}
</ul>

<style>
	.nav-links {
		display: flex;
		gap: 2rem;
		text-transform: uppercase;
		list-style: none;

		@media (width <= 680px) {
			gap: 1rem;
			flex-direction: column;
		}

		& a:hover {
			color: var(--accent-xlight);
		}

		& a[aria-current='page'] {
			font-weight: 600;

			&:hover {
				color: inherit;
			}
		}
	}
</style>
