<script>
	import BitmexLiquidations from '../../components/bitmex-liquidations.svelte';
	import { ALL, XBTUSD, ETHUSD, XBTUSD_24H } from './_liquidations.json.js';
	export let page;
	let liquidations = { ALL, XBTUSD, ETHUSD };
</script>

<BitmexLiquidations {liquidations} chart={{ XBTUSD: XBTUSD_24H }} />
