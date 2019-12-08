<script>
	import { Table } from '@fusionstrings/elevate';
	export let liquidations = [];
</script>
<style>
.number{
    text-align: right;
    font-weight: 700;
}
.buy{
    color: var(--positive);
}
.sell{
    color: var(--negative);
}
</style>

{#if liquidations.length > 0}
	<Table compact>
		<thead>
			<tr>
				<th width="20%">Time</th>
				<th width="20%">Symbol</th>
				<th width="20%">Side</th>
				<th width="20%" class="number">Price</th>
				<th width="20%" class="number">Quantity</th>
			</tr>
		</thead>
		<tbody>
			{#each liquidations as liquidation}
				<tr>
					<td width="20%">
						{new Date(liquidation.timestamp._seconds * 1000).toLocaleTimeString()}
					</td>

					<td width="20%">{liquidation.symbol}</td>

					<td width="20%">
						{liquidation.side === 'Buy' ? 'Shorts' : 'Longs'}
					</td>

					<td
						class={`number ${liquidation.side.toLowerCase()}`}
						width="20%">
						{Number.parseFloat(liquidation.price).toPrecision().toLocaleString()}
					</td>

					<td width="20%" class="number">
						{Number.parseFloat(liquidation.leavesQty).toPrecision().toLocaleString()}
					</td>
				</tr>
			{/each}
		</tbody>
	</Table>
{/if}
