<script lang="ts">
	type CtaButtonProps = {
		text: string;
	};

	let { text, ...rest }: CtaButtonProps = $props();
</script>

<button class="cta-button" {...rest}>{text}</button>

<style>
	.cta-button {
		border-radius: var(--radius-m);
		border: 1px solid transparent;
		cursor: pointer;
		height: 100%;
		width: 100%;
		padding: 0.75rem 1.5rem;

		background: var(--accent-xlight);
		box-shadow: inset 2px 2px 8px rgb(from white r g b / 0.5);

		font-family: var(--font-body);
		font-size: 0.95rem;
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.02em;

		&:hover {
			background-color: var(--accent-light);
		}

		&:active {
			background-color: var(--accent-base);
		}
	}
</style>
