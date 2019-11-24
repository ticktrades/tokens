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
</style>

{#if recentTrades.length > 0}
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

					<td width="25%" class={`number ${recentTrade.side.toLowerCase()}`}>
						{Number(recentTrade.price).toLocaleString()}
					</td>

					<td width="25%" class="number">
						{new Date(recentTrade.timestamp).toLocaleTimeString()}
					</td>
				</tr>
			{/each}
		</tbody>
	</Table>
{/if}
