<script>
	import Card from './card.svelte';
	export let symbolSummaries = [];
</script>

<style>

	li{
		min-width: 250px;
		margin-bottom: 10px;
	}
</style>

<aside class="symbol-list">
	<ul>
		{#each symbolSummaries as symbolSummary}
			<li><Card>{symbolSummary.symbol}</Card></li>
		{/each}
	</ul>
</aside>
