<script>
	export let symbolSummaries = [];
</script>

<style>
	.symbol-list {
		background: red;
		height: 100px;
	}
</style>

<aside class="symbol-list">
	<ul>
		{#each symbolSummaries as symbolSummary}
			<li>{symbolSummary.symbol}</li>
		{/each}
	</ul>
</aside>
