<script lang="ts">
	import logo from '$lib/assets/logo-transparent-comp.png';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/navbar/Navbar.svelte';
	import '../app.css';
	import '../layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />

	<meta property="og:image" content="https://teatingria.com/images/og-image.webp" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://teatingria.com/images/og-image.webp" />
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
