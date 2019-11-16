<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import Card from './card.svelte';
	import BitmexLiquidationTable from './bitmex-liquidation-table.svelte';
	export let liquidations = {};
	$: entries = Object.entries(liquidations);
</script>

{#if entries.length > 0}
	<Card>
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
{/if}
