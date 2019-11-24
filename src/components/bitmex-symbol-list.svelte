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
	:global(.symbol-list > ul a) {
		display: block;
	}
	:global(.symbol-list .active .button.invert){
		border-color: var(--brand-color);
		color: var(--brand-color);
	}
</style>

{#if symbolSummaries.length > 0}
	<aside class="symbol-list">
		<ul>
			{#each symbolSummaries as symbolSummary}
				<li
					class:active={symbolSummary.symbol.toLocaleLowerCase() === active.toLowerCase()}>
					<Button invert href={symbolSummary.href}>
						{symbolSummary.symbol}
					</Button>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
