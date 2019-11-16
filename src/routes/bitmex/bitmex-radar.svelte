<script>
	import BitmexLiquidations from '../../components/bitmex-liquidations.svelte';
	import { ALL, XBTUSD, ETHUSD } from './_liquidations.json.js';
	export let page;
	let liquidations = { ALL, XBTUSD, ETHUSD };
</script>

<BitmexLiquidations {page} {liquidations} />
