<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import '../app.css';
	import '../layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout-container">
	<Navbar />
	{@render children()}
	<Footer />
</div>

<style>
	.layout-container {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}
</style>
