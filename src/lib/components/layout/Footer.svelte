<script lang="ts">
	import { resolve } from '$app/paths';
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-content wrapper">
		<div class="footer-copy">
			<p>&copy; {year} Tea Tingria</p>
		</div>
		<div class="footer-info">
			<a href={resolve('/yhteystiedot')}>Ota yhteyttä</a>
			<a href="#bottom">some</a>
			<a href="#bottom">some</a>
			<a href="#bottom">some</a>
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

		& a:hover {
			color: var(--accent-xlight);
		}
	}
</style>
