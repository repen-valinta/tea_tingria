<script lang="ts">
	import ContactForm from '$lib/components/yhteystiedot/ContactForm.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<svelte:head>
	<title>Yhteystiedot - Tea Tingria</title>
	<meta
		name="description"
		content="Ota rohkeasti yhteyttä! Keikkapyynnöt, risut, ruusut ihan mitä vain."
	/>
</svelte:head>

<main>
	<div class="yhteystiedot-content wrapper">
		<h1>yhteystiedot</h1>
		<ContactForm {form} />
		<section class="yritystiedot">
			<h3>Yritystiedot</h3>
			<p>Tmi Tea Tingria</p>
			<p>Pulttitie 16 A PL7</p>
			<p>00880 Helsinki</p>
			<p>y-tunnus: 2891833-1</p>
			<p class="puh">puh: 045 611 6995</p>
		</section>
	</div>
</main>

<style>
	.yhteystiedot-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-block: 2rem;
		gap: 1rem;

		& h1 {
			font-size: 2rem;
		}
	}

	.yritystiedot {
		display: flex;
		flex-direction: column;
		width: min(100%, 600px);
	}

	.puh {
		margin-top: 1rem;
	}
</style>
