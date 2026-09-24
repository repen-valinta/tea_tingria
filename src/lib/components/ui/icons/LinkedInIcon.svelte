<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<SVGSVGElement> & {
		strokeWidth?: number | string;
	};

	let { strokeWidth = 1, class: className, ...rest }: Props = $props();
</script>

<svg
	{...rest}
	class={className}
	width="100%"
	height="100%"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g
		transform="scale(0.375)"
		stroke="currentColor"
		stroke-width={Number(strokeWidth) * 2.6667}
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path
			d="M34.34,24.1H25.65V55.53h9V41.13c0-3.82.72-7.49,5.43-7.49s4.72,4.34,4.72,7.73V55.53h9V39.46c0-7.76-1.65-14.92-10.81-14.92-3.38-.13-6.65.49-8.47,3.25a.11.11,0,0,1-.21-.06Z"
		/>
		<path d="M10.92,24.1H20V55.53H10.92Z" />
		<path d="M15.44,8.47a5.27,5.27,0,1,0,5.25,5.29v0A5.25,5.25,0,0,0,15.44,8.47Z" />
	</g>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		aspect-ratio: 1 / 1;
		display: block;
	}
</style>
