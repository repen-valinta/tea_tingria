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
		display: flex;
		align-items: center;
		overflow: hidden;
		position: relative;
		border-radius: var(--radius-l);
		height: min(80svh, 800px);

		@media (width <= 680px) {
			height: min(60svh, 600px);
		}
	}

	.video-component {
		width: 100%;
		height: 100%;
		pointer-events: none;
		object-fit: cover;
	}
</style>
