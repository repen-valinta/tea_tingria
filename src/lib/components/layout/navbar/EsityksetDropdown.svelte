<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { RouteId } from '$app/types';
	import { subLinks } from '$lib/data/navigation';

	let { onNavigate }: { onNavigate?: () => void } = $props();
	let isOpen = $state(false);

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isOpen = false;
		}
	}

	function navigate() {
		isOpen = false;
		onNavigate?.();
	}
</script>

<li class="esitykset-dropdown">
	<button
		class="dropdown-trigger"
		type="button"
		aria-expanded={isOpen}
		aria-controls="esitykset-submenu"
		onclick={toggleDropdown}
		onkeydown={closeDropdown}
	>
		<span>Esitykset</span>
		<ChevronDown class={isOpen ? 'open' : ''} aria-hidden="true" size={16} />
	</button>

	{#if isOpen}
		<ul id="esitykset-submenu" class="submenu">
			{#each subLinks as subLink (subLink.to)}
				<li>
					<a href={resolve(subLink.to as RouteId)} onclick={navigate}>{subLink.link}</a>
				</li>
			{/each}
		</ul>
	{/if}
</li>

<style>
	.esitykset-dropdown {
		position: relative;
	}

	.dropdown-trigger {
		border: 0;
		padding: 0;
		color: inherit;
		font: inherit;
		letter-spacing: inherit;
		text-transform: inherit;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.25rem;

		&:hover {
			color: var(--accent-light);
		}
	}

	.dropdown-trigger :global(svg) {
		transition: transform 150ms ease;
	}

	.dropdown-trigger :global(svg.open) {
		transform: rotate(180deg);
	}

	.submenu {
		position: absolute;
		top: calc(100% + 0.75rem);
		left: 50%;
		transform: translateX(-50%);
		min-width: max-content;
		padding: 0.75rem 1rem;
		border-radius: var(--radius-m);
		background: rgb(from var(--neutral-xdark) r g b / 0.98);
		box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 25%);
		list-style: none;
		display: grid;
		gap: 0.75rem;

		& a {
			white-space: nowrap;

			&:hover {
				color: var(--accent-light);
			}
		}
	}

	@media (width <= 680px) {
		.submenu {
			position: static;
			transform: none;
			margin-top: 0.75rem;
			padding: 0 0 0 1rem;
			background: transparent;
			box-shadow: none;
			gap: 1rem;
		}
	}
</style>
