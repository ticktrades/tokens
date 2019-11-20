<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import Card from './card.svelte';
	import BitmexLiquidationTabs from './bitmex-liquidation-tabs.svelte';
	import BitmexLiquidationChart from './bitmex-liquidation-chart.svelte';
	export let liquidations = {};
	export let chart = {};
</script>

<BitmexLiquidationChart liquidations={chart} />

<BitmexLiquidationTabs liquidations={liquidations} />
