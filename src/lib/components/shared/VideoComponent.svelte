<script lang="ts">
	type videoProps = {
		source: string;
		poster: string;
	};

	let { source, poster }: videoProps = $props();
</script>

<section class="video-component-container">
	<video class="video-component" muted autoplay loop playsinline aria-hidden="true" {poster}>
		<source src={source} type="video/mp4" />
	</video>
</section>

<style>
	.video-component-container {
		margin: 2rem 0 0 1rem;
		width: fit-content;
		max-width: 100%;
		margin-inline: auto; /* drop this if you want it left-aligned */
		overflow: hidden;
		border-radius: var(--radius-l);

		@media (width <= 680px) {
			margin-top: 1rem;
		}
	}

	.video-component {
		display: block; /* removes the baseline gap under inline video */
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: min(60svh, 800px);
		pointer-events: none;

		@media (width <= 680px) {
			max-height: min(60svh, 600px);
		}
	}
</style>
