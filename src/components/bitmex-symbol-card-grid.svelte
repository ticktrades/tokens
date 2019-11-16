<script>
	import BitmexSymbolCard from './bitmex-symbol-card.svelte';
	export let symbolSummaries = [];
	export let activeInstrumentsHourlyRate;
</script>

<style>
	aside {
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* repeat(auto-fill, minmax(70px, calc(50vw))); */
		box-sizing: border-box;
		grid-gap: 10px;
		/* padding: 10px; */
	}
</style>

{#if symbolSummaries.length > 0}
	<aside class="symbol-list">
		{#each symbolSummaries as {symbol, price, prevPrice24h, href}}
			<BitmexSymbolCard {symbol} {href} {price} {prevPrice24h} chartData={activeInstrumentsHourlyRate[symbol]} />
		{/each}
	</aside>
{/if}
