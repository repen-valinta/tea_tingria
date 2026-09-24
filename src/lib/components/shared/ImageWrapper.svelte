<script lang="ts">
	type Fit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

	type Props = {
		src: string;
		alt: string;
		title?: string;
		height?: string;
		fit?: Fit;
		cover?: boolean;
	};

	let { src, alt, title, height = 'auto', fit = 'cover', cover }: Props = $props();
</script>

<div
	class="image-wrapper"
	class:cover-wrapper={cover}
	style:--image-fit={fit}
	style:--image-height={height}
>
	<enhanced:img {src} {alt} {title} />
</div>

<style>
	.image-wrapper {
		display: flex;
		justify-content: center;
		width: fit-content;
		max-width: 100%;
		overflow: hidden;
		border-radius: var(--radius-m);
	}

	.image-wrapper :global(picture) {
		display: contents;
	}

	.image-wrapper :global(img) {
		width: auto;
		height: var(--image-height);
		max-width: 100%;
		max-height: 600px;
		object-fit: var(--image-fit);

		@media (width <= 700px) {
			max-height: 100%;
		}
	}
	.cover-wrapper {
		max-height: 700px;

		@media (width <= 680px) {
			height: min(350px, 600px);
			object-fit: cover;
		}
	}
</style>
