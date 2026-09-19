<script lang="ts">
	import DesktopNav from './DesktopNav.svelte';
</script>

<nav>
	<DesktopNav />
</nav>

<style>
	nav {
		position: fixed;
		inset: 0;
		z-index: 10;
		font-weight: 500;
		letter-spacing: 0.05em;
	}
</style>
