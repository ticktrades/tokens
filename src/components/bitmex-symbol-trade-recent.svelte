<script>
	import { Table } from '@fusionstrings/elevate';
	export let symbol = '';
	export let recentTrades = [];
	$: tradeNationality =
		symbol === 'XBTUSD' || symbol === 'ETHUSD'
			? 'homeNotional'
			: 'foreignNotional';
</script>

<style>
	.number {
		text-align: right;
		font-weight: 700;
	}
	.buy {
		color: var(--positive);
	}
	.sell {
		color: var(--negative);
	}
	:global(.table-recent-orders .responsive) {
		overflow-y: auto;
		height: 50vh;
	}
	@media only screen and (min-width: 769px) {
		
		:global(.table-recent-orders .responsive) {
			overflow-y: auto;
			height: 26vh;
		}
	}
</style>
{#if recentTrades.length > 0}
<div class="table-recent-orders">
	<Table compact>
		<thead>
			<tr>
				<th width="20%" class="number">Total</th>
				<th width="20%" class="number">Size</th>
				<th width="20%" class="number">Price</th>
				<th width="20%" class="number">timestamp</th>
			</tr>
		</thead>
		<tbody>
			{#each recentTrades as recentTrade}
				<tr>
					<td width="25%" class="number">
						{Number(recentTrade[tradeNationality]).toLocaleString()}
					</td>

					<td width="25%" class="number">
						{Number(recentTrade.size).toLocaleString()}
					</td>

					<td width="25%" class={`number ${recentTrade.side ? recentTrade.side.toLowerCase() : ''}`}>
						{Number(recentTrade.price).toLocaleString()}
					</td>

					<td width="25%" class="number">
						{new Date(recentTrade.timestamp).toLocaleTimeString()}
					</td>
				</tr>
			{/each}
		</tbody>
	</Table>
	</div>
{/if}
