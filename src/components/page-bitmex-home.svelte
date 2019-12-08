<script>
	import { onMount } from 'svelte';
	import {goto} from '@sapper/app';
	import BitmexSymbolList from './bitmex-symbol-list.svelte';
	import CardSymbolGraph from './card-symbol-graph.svelte';

	export let page;
	const { path } = page;
	
	let symbolSummaries = [{ symbol: 'XBTUSD', href: 'bitmex/xbtusd' }, { symbol: 'ETHUSD', href: 'bitmex/ethusd' }];

	function onMediaChange(event){
		if(event.matches){	
			return goto(`${path}/${symbolSummaries[0].symbol.toLocaleLowerCase()}`);
		}
	}

	onMount(() => {
		const mql = window.matchMedia('screen and (min-width: 769px)');
		onMediaChange(mql);
		mql.addListener(onMediaChange);
		return () => mql.removeListener(onMediaChange);
	});
</script>

<BitmexSymbolList {symbolSummaries} />
