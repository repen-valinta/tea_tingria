<script lang="ts">
	import { X } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import NavLinks from './NavLinks.svelte';

	let { onClose }: { onClose: () => void } = $props();
</script>

<div
	id="mobile-menu"
	class="mobile-nav-links"
	role="dialog"
	aria-label="Mobiilivalikko"
	transition:fade={{ delay: 150, duration: 200 }}
>
	<button class="mobile-nav-button" type="button" onclick={onClose} aria-label="Sulje valikko">
		<X color="#a3a3a3" />
	</button>
	<NavLinks onNavigate={onClose} />
</div>

<style>
	.mobile-nav-links {
		position: fixed;
		inset: 0;
		z-index: 15;
		background: var(--bg);
		min-height: 100dvh;
		display: grid;
		place-items: center;
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
		background-color: transparent;
		background-color: rgb(from var(--neutral-xdark) r g b / 0.75);
		backdrop-filter: blur(4px);
		cursor: pointer;
	}
</style>
