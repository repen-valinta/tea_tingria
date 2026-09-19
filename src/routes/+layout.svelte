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

<Navbar />
{@render children()}
<Footer />
