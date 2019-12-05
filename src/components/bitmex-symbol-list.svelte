<script>
	import { Button } from '@fusionstrings/elevate';

	export let active = '';
	export let symbolSummaries = [];
	export let sortedActiveInstrumentTradeStore = {};
</script>

<style>
	ul {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 10px;
		margin: 0;
	}
	:global(.symbol-list > ul a) {
		display: block;
	}
	:global(.symbol-list .active .button.invert) {
		border-color: var(--brand-color);
		color: var(--brand-color);
	}
	:global(.symbol-list .button.invert) {
		display: flex;
		justify-content: space-between;
	}
	.left{
		text-align: left;
		display: inline-block;
	}
	.number{
		font-weight: 300;
	}
</style>

{#if symbolSummaries.length > 0}
	<aside class="symbol-list">
		<ul>
			{#each symbolSummaries as { symbol, href, price }}
				<li
					class:active={symbol.toLocaleLowerCase() === active.toLowerCase()}>
					<Button invert {href}>
						<span class="left">{symbol}</span>
						<span class={`number ${sortedActiveInstrumentTradeStore[symbol] && sortedActiveInstrumentTradeStore[symbol].side ? sortedActiveInstrumentTradeStore[symbol].side.toLowerCase() : ''}`}>
							{#if sortedActiveInstrumentTradeStore[symbol]}
								{sortedActiveInstrumentTradeStore[symbol].price}
							{:else}{price}{/if}
						</span>
					</Button>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
