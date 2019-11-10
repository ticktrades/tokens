<script>
	import Card from './card.svelte';
	import BitmexSymbolChart from './bitmex-symbol-chart.svelte';

	export let symbol;
	export let price;
	export let chartData;
	export let prevPrice24h;
	export let href;

	$: changeNum = Number.parseFloat(
		((price - prevPrice24h) / prevPrice24h) * 100
	).toFixed(2);

	$: changePercent = `${changeNum} %`;

	$: trend = changeNum > 0 ? 'bull' : 'bear';
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		box-sizing: border-box;
		grid-gap: 5px;
	}
	.symbol-price {
		grid-column: span 8;
		display: flex;
		justify-content: space-between;
	}
	:global(.symbol){
		color: var(--text-color-symbol);
		font-family: var(--font-family-symbol);
		font-size: 2.2rem;
	}

	.price{
		font-size: 1.8rem;
	}
	.chart {
		grid-column: span 5;
	}
	.change {
		text-align: right;
		grid-column: span 3;
	}
	:global(.bull){
		color: var(--positive);
	}

	:global(.bear){
		color: var(--negative);
	}
	a {
		color: var(--brand-color);
	}
</style>

<Card>
	{#if href}
		<a {href} class="grid">
			<span class="symbol-price">
				<span class="symbol">{symbol}</span>
				<span class="price">{price}</span>
			</span>
			<span class="chart">
				<BitmexSymbolChart data={chartData} />
			</span>
			<span class={`change ${trend}`}>{changePercent}</span>
		</a>
	{:else}
		<article class="grid">
			<span class="symbol">{symbol}</span>
			<span class="price">{price}</span>
			<span class="chart">
				<BitmexSymbolChart data={chartData} />
			</span>
			<span class={`change ${trend}`}>{changePercent}</span>
		</article>
	{/if}
</Card>
