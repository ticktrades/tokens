<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import Card from './card.svelte';
	import BitmexLiquidationTable from './bitmex-liquidation-table.svelte';
	import BitmexLiquidationChart from './bitmex-liquidation-chart.svelte';
	export let liquidations = {};
	export let chart = {};
	$: entries = Object.entries(liquidations);
</script>
<style>
.liquidation-table{
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>
<BitmexLiquidationChart liquidations={chart} />

{#if entries.length > 0}
	<div class="liquidation-table">
		<Card>
			<h2>Recent Liquidations</h2>
			<Tabs>
				<TabList>
					{#each entries as [symbol]}
						<Tab>{symbol}</Tab>
					{/each}
				</TabList>

				{#each entries as [_, data]}
					<TabPanel>
						<BitmexLiquidationTable liquidations={data} />
					</TabPanel>
				{/each}
			</Tabs>
		</Card>
	</div>
{/if}
