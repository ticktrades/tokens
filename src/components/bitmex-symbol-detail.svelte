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
	import BitmexSymbolOrderbook from './bitmex-symbol-orderbook.svelte';
	import BitmexSymbolTradeRecent from './bitmex-symbol-trade-recent.svelte';
	import BitmexSymbolTradeWhale from './bitmex-symbol-trade-whale.svelte';
	import BitmexLiquidationTabs from './bitmex-liquidation-tabs.svelte';
	import mediaQuery from '../utils/match-media.js';

	let medQMobile = mediaQuery('(max-width: 768px)');

	export let symbol;
	export let orderBook10Stream = { bids: [], asks: [] };
	export let liquidations;
	export let recentTrades;
	export let whaleTrades;
	export let trendingArticles = [];
	export let techAnalysis = [];
</script>

<style>
	.grid {
		display: grid;
		/* grid-template-columns: minmax(500px, 2fr) minmax(300px, 1fr) minmax(300px, 1fr);  */
		grid-template-columns: repeat(auto-fill, minmax(350px, auto));
		box-sizing: border-box;
		grid-gap: 10px;
	}
	.subgrid {
		display: grid;
		/* grid-template-columns: minmax(500px, 2fr) minmax(300px, 1fr) minmax(300px, 1fr);  */
		grid-template-columns: repeat(auto-fill, minmax(250px, auto));
		box-sizing: border-box;
		grid-gap: 10px;
	}
	:global(.symbol-detail #tradingview-widget) {
		grid-column: 1 / span 2;
		height: 60vh;
	}

	@media only screen and (max-width: 768px) {
		.grid,
		.subgrid {
			grid-template-columns: repeat(auto-fill, minmax(auto, 100vw));
		}
		:global(.symbol-detail #tradingview-widget) {
			grid-column: 1;
		}
	}
</style>

<div class="symbol-detail grid">
	<!-- <slot name="header">
		<h2>
			<span class="symbol">{symbol.toUpperCase()}</span>
			<span class={`price ${side.toLowerCase()}`}>
				{Number(price).toLocaleString()}
			</span>
		</h2>
	</slot> -->
	<div class="subgrid">
		<TradingView
			exchange="BITMEX"
			{symbol}
			hide_side_toolbar={$medQMobile} />

		<BitmexSymbolNews {trendingArticles} {techAnalysis} {symbol} />

		<Card>
			<section>
				<h1>Social News</h1>
			</section>
		</Card>
	</div>

	<div class="subgrid">
		<BitmexSymbolOrderbook {orderBook10Stream} />
		<BitmexLiquidationTabs {liquidations} />
	</div>
	<div class="subgrid">
		
		<Card>
			<Tabs>
				<TabList>
					<Tab>Recent Trades</Tab>
					<Tab>Whale Trades</Tab>
				</TabList>

				<TabPanel>
					<BitmexSymbolTradeRecent trades={recentTrades} {symbol} />
				</TabPanel>

				<TabPanel>
					<BitmexSymbolTradeWhale trades={whaleTrades} {symbol} />
				</TabPanel>
			</Tabs>
		</Card>
	</div>

	<!-- <Card>
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
	</Card> -->

</div>
