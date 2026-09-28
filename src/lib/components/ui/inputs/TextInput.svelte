<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { ...rest }: HTMLInputAttributes = $props();
</script>

<input {...rest} />

<style>
	input {
		font-family: var(--font-body);
		width: 100%;
		padding: 0.75rem;
		border-radius: var(--radius-m);
		font-size: 0.95rem;
		border: 1px solid transparent;
		outline: none;
		caret-color: var(--accent-light);

		&:focus-visible {
			border: 2px solid var(--accent-light);
		}
	}
</style>
