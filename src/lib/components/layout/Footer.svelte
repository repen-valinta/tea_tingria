<script lang="ts">
	import FacebookIcon from '$lib/components/ui/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/ui/icons/InstagramIcon.svelte';
	import LinkedInIcon from '$lib/components/ui/icons/LinkedInIcon.svelte';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-content wrapper">
		<div class="footer-copy">
			<p>&copy; {year} Tea Tingria</p>
		</div>
		<div class="footer-info">
			<a href="https://www.instagram.com/teatingria/" target="_blank" aria-label="Instagram">
				<InstagramIcon aria-hidden="true" strokeWidth="0.85" />
			</a>
			<a href="https://www.facebook.com/TeaTingria/" target="_blank" aria-label="Facebook">
				<FacebookIcon aria-hidden="true" strokeWidth="0.85" />
			</a>
			<a
				href="https://fi.linkedin.com/in/tea-tingria-2b0938162"
				target="_blank"
				aria-label="LinkedIn"
			>
				<LinkedInIcon aria-hidden="true" strokeWidth="0.85" />
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		background: linear-gradient(
			to bottom,
			var(--neutral-xxdark),
			rgb(from var(--accent-xdark) r g b / 0.25)
		);
		padding-block: 0.5rem;
		font-size: 0.95rem;

		border-top: 1px solid rgb(from var(--accent-light) r g b / 0.125);
	}
	.footer-content {
		padding-block: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		@media (width <= 680px) {
			flex-direction: column-reverse;
			gap: 1rem;
		}
	}

	.footer-copy {
		color: var(--text-light-muted);
		font-weight: 200;

		@media (width <= 680px) {
			border-top: 1px solid rgb(from var(--accent-light) r g b / 0.25);
			width: min(95%, 400px);
			padding-top: 0.75rem;
			text-align: center;
		}
	}

	.footer-info {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--text-light-muted);

		& a {
			height: 24px;
			display: flex;
			color: inherit;
			transition: all 150ms ease;

			&:hover,
			&:focus-visible {
				color: var(--accent-xlight);
				transform: scale(1.1);
			}
		}
	}
</style>
