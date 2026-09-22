<script lang="ts">
	type Props = {
		vaatimus: string;
	};

	let { vaatimus }: Props = $props();
</script>

<p class="esitys-vaatimus">{vaatimus}</p>

<style>
	.esitys-vaatimus {
		width: min(100%, 1000px);
		color: var(--text-light-muted);
		text-align: center;
		text-wrap: balance;
		font-weight: 300;
		padding-top: 1rem;
	}
</style>
