<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import Card from './card.svelte';
	import BitmexLiquidationTable from './bitmex-liquidation-table.svelte';
	export let liquidations;
	$: entries = Object.entries(liquidations);
</script>

<style>
	h4 {
		text-align: center;
	}
	/* .liquidation-table {
		margin-top: 20px;
		margin-bottom: 20px;
	} */
	:global(.liquidation-table .responsive) {
		overflow-y: auto;
		height: 50vh;
	}
	@media only screen and (min-width: 769px) {
		/* h4 {
			display: none;
		} */
		:global(.liquidation-table .responsive) {
			overflow-y: auto;
			height: 30vh;
		}
	}
</style>

{#if entries.length > 0}
	<div class="liquidation-table">
		<Card>
			<h4>Recent Liquidations</h4>
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
