<script>
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';
	import SymbolList from './symbol-list.svelte';
	import StripNav from './strip-nav.svelte';
	import BitmexSymbolDetail from './bitmex-symbol-detail.svelte';

	export let page;
	const { params, path } = page;
	let symbolSummaries = [{ symbol: 'BTC' }, { symbol: 'ETH' }];

	function onMediaChange(event) {
		if (event.matches) {
			return goto('/bitmex');
		}
	}
	onMount(() => {
		const mql = window.matchMedia('screen and (max-width: 768px)');
		onMediaChange(mql);
		mql.addListener(onMediaChange);
		return () => mql.removeListener(onMediaChange);
	});
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: 100px repeat(auto-fill, minmax(calc((769px - 100px) / 2), 1fr));
	}

	@media only screen and (max-width: 768px) {
		.detail {
			display: none;
		}
	}
</style>

<svelte:head>
	<title>Bitmex &ndash; {params.trade}</title>
</svelte:head>

<section class="grid">
	<StripNav />
	<SymbolList {symbolSummaries} />
	<div class="detail">
		<BitmexSymbolDetail />
	</div>
</section>
