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
		width: 100%;
		height: var(--image-height);
		border-radius: var(--radius-m);
		overflow: hidden;
	}

	.image-wrapper :global(img) {
		width: 100%;
		height: 100%;
		object-fit: var(--image-fit);
		border-radius: inherit;
	}
</style>
