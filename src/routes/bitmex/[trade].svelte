<script context="module">
	import data from './_trade.json.js';
	export async function preload(page) {
		const symbol = page.params.trade;
		//debugger

		// const data = await response.json();
		const {
			symbolSummaries,
			activeInstrumentsHourlyRate,
			recentTrades
		} = data.data;

		return {
			page,
			symbol,
			symbolSummaries,
			activeInstrumentsHourlyRate,
			recentTrades,
			tradeStream: recentTrades[0]
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

	export let symbol;
	export let symbolSummaries;
	export let tradeStream = {};
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
			price={tradeStream.price}
			side={tradeStream.side}
			{orderBook10Stream} />
	</section>
</div>
