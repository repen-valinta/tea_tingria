<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav>
	<div class="nav-content wrapper">
		<a class="nav-logo" href={resolve('/')}>
			<img src="/icons/logo-transparent.png" alt="logo" title="logo" height="36" />
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
		padding: 1rem;
		background-color: var(--accent-xxdark);
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}

	.nav-logo {
		display: grid;
		place-items: center;

		& img {
			transform: translateY(4px);
		}
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}
</style>
