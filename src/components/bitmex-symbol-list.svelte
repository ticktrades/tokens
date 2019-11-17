<script>
	import { Button } from '@fusionstrings/elevate';

	export let active = '';
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
					<Button invert href={symbolSummary.href} class={symbolSummary.symbol.toLocaleLowerCase() === active ? 'active' : ''}>
						{symbolSummary.symbol}
					</Button>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
