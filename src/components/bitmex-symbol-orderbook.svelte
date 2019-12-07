<script>
	import Card from './card.svelte';
	import BitmexSymbolOrderbookAsks from './bitmex-symbol-orderbook-asks.svelte';
	import BitmexSymbolOrderbookBids from './bitmex-symbol-orderbook-bids.svelte';
	export let symbol = '';
	export let orderBook10Stream = { bids: [], asks: [] };

	$: orderBook10StreamBidSize = orderBook10Stream.bids
		.map(([price, size]) => size)
		.reduce((previous, current) => {
			return Number.parseFloat(Number.parseFloat(previous) + Number.parseFloat(current));
		}, 0);

	$: orderBook10StreamAskSize = orderBook10Stream.asks
		.map(([price, size]) => size)
		.reduce((previous, current) => {
			return Number.parseFloat(Number.parseFloat(previous) + Number.parseFloat(current));
		}, 0);

	$: orderBook10StreamSize =
		orderBook10StreamBidSize + orderBook10StreamAskSize;
	$: orderBook10StreamBidSizePercent =
		(orderBook10StreamBidSize / orderBook10StreamSize) * 100;
	$: orderBook10StreamAskSizePercent =
		(orderBook10StreamAskSize / orderBook10StreamSize) * 100;
</script>

<style>
	.orderbook {
		display: grid;
		box-sizing: border-box;
		grid-gap: 10px;
		grid-template-columns: 1fr 1fr;
	}

	/* :global(.orderbook .responsive) {
		height: 25vh;
	} */

	:global(.orderbook .responsive table th:last-child, .orderbook
			.responsive
			table
			td:last-child) {
		text-align: right;
	}
	.gauge {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-bottom: 10px;
	}
	.gauge .summary {
		display: flex;
		justify-content: space-around;
	}
	.orderbook-bid-size {
		background: var(--positive);
		height: 30px;
		float: right;
	}
	.orderbook-ask-size {
		background: var(--negative);
		height: 30px;
		float: left;
	}
</style>

<section>
	<div class="gauge">
		<div
			class="summary summary-bid"
			data-width={orderBook10StreamBidSizePercent}>
			<span>{Number.parseFloat(orderBook10StreamBidSize).toLocaleString()}</span>
			<span>
				{Number.parseFloat(orderBook10StreamBidSizePercent
						.toFixed(2)
						.toLocaleString())} %
			</span>
		</div>
		<div
			class="summary summary-ask"
			data-width={orderBook10StreamAskSizePercent}>
			<span>{Number.parseFloat(orderBook10StreamAskSize).toLocaleString()}</span>
			<span>
				{Number.parseFloat(orderBook10StreamAskSizePercent
						.toFixed(2)
						.toLocaleString())} %
			</span>
		</div>
		<div>
			<div
				class="orderbook-bid-size"
				style="width: {orderBook10StreamBidSizePercent}%" />
		</div>
		<div>
			<div
				class="orderbook-ask-size"
				style="width: {orderBook10StreamAskSizePercent}%" />
		</div>
	</div>
	<section class="orderbook">
		<Card compact>
			<BitmexSymbolOrderbookBids bids={orderBook10Stream.bids} {symbol} />
		</Card>
		<Card compact>
			<BitmexSymbolOrderbookAsks asks={orderBook10Stream.asks} {symbol} />
		</Card>
	</section>
</section>
