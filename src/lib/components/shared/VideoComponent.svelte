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
		width: fit-content;
		max-width: 100%;
		margin-inline: auto;
		overflow: hidden;
		border-radius: var(--radius-l);

		@media (width <= 680px) {
			margin-top: 1rem;
		}
	}

	.video-component {
		display: block;
		width: auto;
		height: auto;
		max-width: 100%;

		max-height: min(60svh, 800px);
		pointer-events: none;

		@media (width <= 680px) {
			height: min(350px, 600px);
			object-fit: cover;
		}
	}
</style>
