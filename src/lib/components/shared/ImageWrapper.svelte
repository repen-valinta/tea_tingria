<script lang="ts">
	type Fit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

	type Props = {
		src: string;
		alt: string;
		title?: string;
		height?: string;
		fit?: Fit;
	};

	let { src, alt, title, height = 'auto', fit = 'cover' }: Props = $props();
</script>

<div class="image-wrapper" style:--image-fit={fit} style:--image-height={height}>
	<enhanced:img {src} {alt} {title} />
</div>

<style>
	.image-wrapper {
		display: flex;
		justify-content: center;
		max-width: 100%;
		overflow: hidden;
		border-radius: var(--radius-m);
	}

	.image-wrapper :global(picture) {
		display: contents;
	}

	.image-wrapper :global(img) {
		width: auto;
		height: var(--image-height); /* 'auto' by default */
		max-width: 100%;
		max-height: 500px;
		object-fit: var(--image-fit);
	}
</style>
