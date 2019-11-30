<script context="module">
	import data from './_trade.json.js';
	import { ALL, XBTUSD, ETHUSD, XBTUSD_24H } from './_liquidations.json.js';
	export async function preload(page) {
		const symbol = page.params.trade;
		//debugger

		// const data = await response.json();
		const {
			symbolSummaries,
			activeInstrumentsHourlyRate,
			recentTrades,
			whaleTrades
		} = data.data;

		return {
			page,
			symbol,
			symbolSummaries,
			activeInstrumentsHourlyRate,
			recentTrades,
			whaleTrades,
			tradeStream: recentTrades[0],
			liquidations: { ALL, XBTUSD, ETHUSD },
			liquidationsChart: { XBTUSD: XBTUSD_24H }
		};
	}
</script>

<script>
	// import { onMount } from 'svelte';
	// import { goto } from '@sapper/app';
	import BitmexSymbolList from '../../components/bitmex-symbol-list.svelte';
	import StripNav from '../../components/strip-nav.svelte';
	import BitmexSymbolDetail from '../../components/bitmex-symbol-detail.svelte';
	import orderBook10Stream from './_orderbook10stream.json.js';

	import {tradeStreamStore} from '../../stores/bitmex.js';
	export let symbol;
	export let symbolSummaries;
	export let tradeStream = {};
	export let liquidations;
	export let liquidationsChart;
	export let recentTrades;
	export let whaleTrades;
	$: {
		tradeStreamStore.update(store => ({...store, symbol}) )
	}
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: auto 1fr;
		/* grid-template-columns: repeat(auto-fill, minmax(calc(769px / 2), 1fr)); */
	}

	aside {
		display: grid;
		grid-template-columns: auto auto;
		grid-gap: 10px;
	}

	@media only screen and (max-width: 768px) {
		aside {
			display: none;
		}
	}
</style>

<svelte:head>
	<title>{tradeStream.price} | {symbol.toUpperCase()}</title>
</svelte:head>
<div class="grid">
	<aside>
		<StripNav />
		<BitmexSymbolList active={symbol} {symbolSummaries} />
	</aside>
	<section class="detail">
		<BitmexSymbolDetail
			{symbol}
			{orderBook10Stream}
			{recentTrades}
			{whaleTrades}
			{liquidations}
			{liquidationsChart} />
	</section>
</div>
