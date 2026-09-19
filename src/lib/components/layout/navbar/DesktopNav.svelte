<script>
	import { resolve } from '$app/paths';
	import NavLinks from './NavLinks.svelte';
</script>

<div class="desktop-nav">
	<div class="nav-content wrapper">
		<a class="nav-logo" href={resolve('/')}>
			<img src="/icons/logo-transparent-comp.png" alt="logo" title="logo" height="48" />
		</a>
		<NavLinks />
	</div>
</div>

<style>
	.desktop-nav {
		background-color: rgba(from var(--neutral-xxdark) r g b / 0.25);
		backdrop-filter: blur(16px);
		height: var(--nav-height);

		@media (width < 680px) {
			display: none;
		}
	}

	.nav-content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		position: relative;
		height: 100%;
	}

	.nav-logo {
		display: grid;
		place-items: center;
		position: absolute;
		top: 50%;
		left: 1rem;
		transform: translateY(-50%);

		& img {
			transform: translateY(4px);
		}
	}

	@media (max-width > 680px) {
		.nav-content {
			display: none;
		}
	}
</style>
