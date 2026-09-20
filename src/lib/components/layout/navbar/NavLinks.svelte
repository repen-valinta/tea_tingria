<script lang="ts">
	import { resolve } from '$app/paths';

	let { onNavigate }: { onNavigate?: () => void } = $props();

	const navLinks = [
		{
			to: '/',
			link: 'Etusivu'
		},
		{
			to: '/esitykset',
			link: 'Esitykset'
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
		<li>
			<a href={resolve(navLink.to)} onclick={() => onNavigate?.()}>{navLink.link}</a>
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
			color: var(--accent-light);
		}
	}
</style>
