<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import Card from './card.svelte';
	import TradingView from './trading-view.svelte';
	import BitmexSymbolNews from './bitmex-symbol-news.svelte';
	import BitmexSymbolTwitter from './bitmex-symbol-twitter.svelte';
	import BitmexSymbolReddit from './bitmex-symbol-reddit.svelte';
	import BitmexSymbolOrderOpen from './bitmex-symbol-orders-open.svelte';
	import BitmexSymbolOrderClose from './bitmex-symbol-orders-close.svelte';
	import BitmexSymbolOrderPosition from './bitmex-symbol-orders-position.svelte';
	import BitmexSymbolOrderbookAsks from './bitmex-symbol-orderbook-asks.svelte';
	import BitmexSymbolOrderbookBids from './bitmex-symbol-orderbook-bids.svelte';
	import BitmexSymbolTradeRecent from './bitmex-symbol-trade-recent.svelte';
	import BitmexSymbolTradeWhale from './bitmex-symbol-trade-whale.svelte';
	import BitmexSymbolLiquidations from './bitmex-symbol-liquidations.svelte';
	import BitmexSymbolLS from './bitmex-symbol-ls.svelte';

	export let symbol;
</script>

<style>
	.grid {
		display: grid;
		/* grid-template-columns: minmax(500px, 2fr) minmax(300px, 1fr) minmax(300px, 1fr);  */
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		box-sizing: border-box;
		grid-gap: 10px;
	}
	:global(.symbol-detail #tradingview-widget) {
		grid-column: 1 / span 2;
	}
</style>

<div class="symbol-detail grid">
	<TradingView exchange="BITMEX" {symbol} />

	<Card>
		<BitmexSymbolOrderbookAsks {symbol} />
	</Card>
    
	<Card>
		<BitmexSymbolOrderbookBids {symbol} />
	</Card>

	<Card>
		<Tabs>
			<TabList>
				<Tab>Liquidations</Tab>
				<Tab>Longs vs Shorts</Tab>
			</TabList>

			<TabPanel>
				<BitmexSymbolLiquidations {symbol} />
			</TabPanel>

			<TabPanel>
				<BitmexSymbolLS {symbol} />
			</TabPanel>
		</Tabs>
	</Card>

	<Card>
		<Tabs>
			<TabList>
				<Tab>News</Tab>
				<Tab>Reddit</Tab>
				<Tab>Twitter</Tab>
			</TabList>

			<TabPanel>
				<BitmexSymbolNews {symbol} />
			</TabPanel>

			<TabPanel>
				<BitmexSymbolReddit {symbol} />
			</TabPanel>

			<TabPanel>
				<BitmexSymbolTwitter {symbol} />
			</TabPanel>
		</Tabs>
	</Card>

	<Card>
		<Tabs>
			<TabList>
				<Tab>Open</Tab>
				<Tab>Closed</Tab>
				<Tab>Position</Tab>
			</TabList>

			<TabPanel>
				<BitmexSymbolOrderOpen {symbol} />
			</TabPanel>

			<TabPanel>
				<BitmexSymbolOrderClose {symbol} />
			</TabPanel>

			<TabPanel>
				<BitmexSymbolOrderPosition {symbol} />
			</TabPanel>
		</Tabs>
	</Card>

	<Card>
		<BitmexSymbolTradeRecent {symbol} />
	</Card>
	<Card>
		<BitmexSymbolTradeWhale {symbol} />
	</Card>
	<Card>
		<section>
			<h1>Coming Soon</h1>
		</section>
	</Card>
</div>
