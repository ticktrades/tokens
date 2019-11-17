<script>
	import Card from './card.svelte';
	import BitmexSymbolOrderbookAsks from './bitmex-symbol-orderbook-asks.svelte';
	import BitmexSymbolOrderbookBids from './bitmex-symbol-orderbook-bids.svelte';
	export let symbol = '';
</script>

<style>
	.orderbook {
		display: grid;
		box-sizing: border-box;
		grid-gap: 10px;
		grid-template-columns: 1fr 1fr;
	}

	:global(.orderbook .responsive) {
		height: 25vh;
	}

	:global(.orderbook .responsive table th:last-child, .orderbook .responsive table td:last-child) {
		text-align: right;
	}
</style>

<section class="orderbook">
	<Card compact>
		<BitmexSymbolOrderbookBids {symbol} />
	</Card>
	<Card compact>
		<BitmexSymbolOrderbookAsks {symbol} />
	</Card>
</section>
