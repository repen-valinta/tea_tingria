<script lang="ts">
	import FacebookIcon from '$lib/components/ui/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/ui/icons/InstagramIcon.svelte';
	import LinkedInIcon from '$lib/components/ui/icons/LinkedInIcon.svelte';
</script>

<div class="yritys-links">
	<a href="https://www.instagram.com/teatingria/" target="_blank">
		<div class="icon-wrap">
			<InstagramIcon aria-hidden="true" strokeWidth="0.85" />
		</div>
		<p>Instagram</p></a
	>
	<a href="https://www.facebook.com/TeaTingria/" target="_blank">
		<div class="icon-wrap">
			<FacebookIcon aria-hidden="true" strokeWidth="0.85" />
		</div>
		<p>Facebook</p></a
	>
	<a href="https://fi.linkedin.com/in/tea-tingria-2b0938162" target="_blank">
		<div class="icon-wrap">
			<LinkedInIcon aria-hidden="true" strokeWidth="0.85" />
		</div>
		<p>LinkedIn</p></a
	>
</div>

<style>
	.yritys-links {
		display: flex;
		margin-top: 0.5rem;
		gap: 1rem;

		@media (width <= 580px) {
			flex-direction: column;
			gap: 0.5rem;
		}

		& a {
			display: flex;
			align-items: center;
			gap: 0 0.25rem;

			&:hover {
				color: var(--accent-xlight);
			}

			& p {
				transform: translateY(2px);
			}
		}
	}

	.icon-wrap {
		height: 1.75cap;
	}
</style>
