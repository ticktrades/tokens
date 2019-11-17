<script>
	// import { onMount } from 'svelte';
	// import { goto } from '@sapper/app';
	import BitmexSymbolList from './bitmex-symbol-list.svelte';
	import StripNav from './strip-nav.svelte';
	import BitmexSymbolDetail from './bitmex-symbol-detail.svelte';

	export let page;
	const { params, path } = page;
	let symbolSummaries = [{ symbol: 'XBTUSD' }, { symbol: 'ETHUSD' }].map(instrument => ({
			...instrument,
			href: `bitmex/${instrument.symbol.toLocaleLowerCase()}`
		}));
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
	<title>Bitmex &ndash; {params.trade}</title>
</svelte:head>

<div class="grid">
	<aside>
		<StripNav />
		<BitmexSymbolList active={params.trade} {symbolSummaries} />
	</aside>
	<section class="detail">
		<BitmexSymbolDetail symbol={params.trade} />
	</section>
</div>
