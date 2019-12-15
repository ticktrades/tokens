<script>
	import { Table } from '@fusionstrings/elevate';
	export let symbol = '';
	export let trades = [];
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
	:global(.table-whale-trades .responsive) {
		overflow-y: auto;
		height: 50vh;
	}
	@media only screen and (min-width: 769px) {
		:global(.table-whale-trades .responsive) {
			overflow-y: auto;
			height: 79vh;
		}
	}
</style>

{#if trades.length > 0}
	<div class="table-whale-trades">
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
				{#each trades as trade}
					<tr>
						<td width="25%" class="number">
							{Number.parseFloat(trade[tradeNationality]).toPrecision().toLocaleString()}
						</td>

						<td width="25%" class="number">
							{Number.parseFloat(trade.size).toPrecision().toLocaleString()}
						</td>

						<td
							width="25%"
							class={`number ${trade.side ? trade.side.toLowerCase() : ''}`}>
							{Number.parseFloat(trade.price).toPrecision().toLocaleString()}
						</td>

						<td width="25%" class="number">
							{new Date(trade.timestamp).toLocaleTimeString()}
						</td>
					</tr>
				{/each}
			</tbody>
		</Table>
	</div>
{/if}
