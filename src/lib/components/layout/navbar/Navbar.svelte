<script lang="ts">
	import DesktopNav from './DesktopNav.svelte';
</script>

<nav>
	<DesktopNav />
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		letter-spacing: 0.05em;
	}
</style>
