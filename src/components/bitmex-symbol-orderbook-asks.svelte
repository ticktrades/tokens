<script>
	import { Table } from '@fusionstrings/elevate';
	export let asks = [0, 0];
</script>

<h6>Asks</h6>
<Table compact>
	<thead>
		<tr>
			<th>Price</th>
			<th>Size</th>
		</tr>
	</thead>
	<tbody>
		{#each asks as [price, size]}
			<tr>
				<td>{Number.parseFloat(price).toPrecision().toLocaleString()}</td>
				<td>{Number.parseFloat(size).toPrecision().toLocaleString()}</td>
			</tr>
		{/each}

	</tbody>
</Table>
