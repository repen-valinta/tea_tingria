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
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
	/>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
		aspect-ratio: 1 / 1;
		display: block;
	}
</style>
