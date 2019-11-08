<script>
	import { Button } from '@fusionstrings/elevate';
	import Card from './card.svelte';
	export let symbolSummaries = [];
</script>

<style>
	li {
		margin-bottom: 10px;
	}
</style>

{#if symbolSummaries.length > 0}
	<aside class="symbol-list">
		<ul>
			{#each symbolSummaries as symbolSummary}
				<li>
					<Button invert href={symbolSummary.symbol.toLowerCase()}>
						{symbolSummary.symbol}
					</Button>
				</li>
				<!-- <li><Card>{symbolSummary.symbol}</Card></li> -->
			{/each}
		</ul>
	</aside>
{/if}
