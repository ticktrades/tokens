<script>
	import { Button } from '@fusionstrings/elevate';

	export let active = '';
	export let symbolSummaries = [];
</script>

<style>
	ul {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 10px;
		margin: 0;
	}
	:global(.symbol-list > ul a){
		display: block;
	}
</style>

{#if symbolSummaries.length > 0}
	<aside class="symbol-list">
		<ul>
			{#each symbolSummaries as symbolSummary}
				<li>
					<Button invert href={symbolSummary.href} class={symbolSummary.symbol.toLocaleLowerCase() === active ? 'active' : ''}>
						{symbolSummary.symbol}
					</Button>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
