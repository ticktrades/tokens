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
	export let recentTrades = [];
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
		height: 60vh;
	}
	:global(.symbol-detail #tradingview-widget, .symbol-detail
			.trade-news-grid) {
		grid-column: 1 / span 2;
	}

	@media only screen and (max-width: 768px) {
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(auto, 100vw));
		}
		.subgrid {
			display: block;
			margin: 10px 20px;
		}
		:global(.symbol-detail #tradingview-widget) {
			padding: 0 0 20px;
		}
	}
</style>

<div class="symbol-detail grid">
	<div class="subgrid">
		<TradingView
			exchange="BITMEX"
			{symbol}
			hide_side_toolbar={$medQMobile} />
		{#if !$medQMobile}
			<BitmexSymbolNews {trendingArticles} {techAnalysis} {symbol} />
		{/if}
	</div>

	<div class="subgrid">
		<BitmexSymbolOrderbook {orderBook10Stream} />
		{#if !$medQMobile}
			<BitmexLiquidationTabs {liquidations} />
		{/if}
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

</div>
