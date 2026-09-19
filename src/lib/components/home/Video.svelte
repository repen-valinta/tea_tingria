<script>
</script>

<section class="hero-video-container">
	<video
		class="hero-video"
		muted
		autoplay
		loop
		playsinline
		aria-hidden="true"
		poster="/video/hero-poster.webp"
	>
		<source src="/video/hero.mp4" type="video/mp4" />
	</video>
</section>

<style>
	.hero-video-container {
		display: flex;
		align-items: center;
		overflow: hidden;
		position: relative;
		height: min(80svh, 800px);

		@media (width <= 680px) {
			height: min(60svh, 600px);
		}
	}

	.hero-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
