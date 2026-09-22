<script lang="ts">
	import { resolve } from '$app/paths';
	import { MenuIcon } from '@lucide/svelte';
	import MobileMenu from './MobileMenu.svelte';

	let menuOpen = $state(false);

	function openMobileMenu() {
		menuOpen = true;
	}

	function closeMobileMenu() {
		menuOpen = false;
	}
</script>

<div class="mobile-nav">
	<a class="nav-mobile-logo" href={resolve('/')}>
		<img src="/icons/logo-transparent-crop.png" alt="logo" title="logo" height="36" />
	</a>
	<button
		class="mobile-nav-button"
		type="button"
		onclick={openMobileMenu}
		aria-label="Avaa valikko"
		aria-controls="mobile-menu"
		aria-expanded={menuOpen}
	>
		<MenuIcon color="#a3a3a3" />
	</button>

	{#if menuOpen}
		<MobileMenu onClose={closeMobileMenu} />
	{/if}
</div>

<style>
	.mobile-nav {
		position: relative;
		display: flex;
		@media (width > 680px) {
			display: none;
		}
	}

	.nav-mobile-logo {
		display: grid;
		place-items: center;
		position: relative;
		left: 1rem;
		top: 1rem;
		border-radius: 50%;
		background: rgb(255 255 255 / 7.5%);
		backdrop-filter: blur(4px);
		padding: 0.25rem;

		/* & img {
			transform: translateY(-8px);
		} */
	}

	.mobile-nav-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		border: 1px solid transparent;
		border-radius: var(--radius-m);
		display: grid;
		place-items: center;
		padding: 0.5rem;
		background-color: rgb(from var(--neutral-xdark) r g b / 0.75);
		backdrop-filter: blur(4px);
		cursor: pointer;
	}
</style>
