<script>
	import { Table } from '@fusionstrings/elevate';
	export let bids = [0, 0];
</script>

<h6>Bids</h6>
<Table compact>
	<thead>
		<tr>
			<th>Size</th>
			<th>Price</th>
		</tr>
	</thead>
	<tbody>
	{#each bids as [price, size]}
		<tr>
			<td>{Number.parseFloat(size).toLocaleString()}</td>
			<td>{Number.parseFloat(price).toLocaleString()}</td>
		</tr>
		{/each}
		
	</tbody>
</Table>
