<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav>
	<div class="nav-content wrapper">
		<a class="nav-logo" href={resolve('/')}>
			<img src="/icons/logo-transparent-comp.png" alt="logo" title="logo" height="36" />
		</a>
		<div class="nav-links">
			<a href={resolve('/')}>Etusivu</a>
			<a href={resolve('/esitykset')}>Esitykset</a>
			<a href={resolve('/opetus')}>Opetus</a>
			<a href={resolve('/yhteystiedot')}>Yhteystiedot</a>
		</div>
	</div>
</nav>

<style>
	nav {
		background-color: rgba(from var(--neutral-xxdark) r g b / 0.25);
		backdrop-filter: blur(16px);
		height: var(--nav-height);
		position: fixed;
		inset: 0;
		z-index: 10;
		font-size: 1.125rem;
		letter-spacing: 0.025em;
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

	.nav-links {
		display: flex;
		gap: 2rem;

		& a:hover {
			color: var(--accent-light);
		}
	}
</style>
