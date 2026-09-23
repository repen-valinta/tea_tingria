<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		label?: string;
		inputName: string;
	};

	let { children, label, inputName }: Props = $props();
</script>

<div class="text-input-wrapper">
	{#if label}
		<label for={inputName}>{label}</label>
	{/if}
	{@render children()}
</div>

<style>
	.text-input-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		& label {
			font-size: 0.875rem;
			padding-left: 0.25rem;
			text-transform: capitalize;
		}
	}
</style>
