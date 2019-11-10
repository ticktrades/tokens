<script>
	import Card from './card.svelte';
	import BitmexSymbolChart from './bitmex-symbol-chart.svelte';

	export let symbol;
	export let price;
	export let chartData;
	export let prevPrice24h;
	export let href;

	$: change = `${Number.parseFloat(
		((price - prevPrice24h) / prevPrice24h) * 100
	).toFixed(2)} %`;
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
	.chart {
		grid-column: span 5;
	}
	.change {
		text-align: right;
		grid-column: span 3;
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
			<span class="change">{change}</span>
		</a>
	{:else}
		<article class="grid">
			<span class="symbol">{symbol}</span>
			<span class="price">{price}</span>
			<span class="chart">
				<BitmexSymbolChart data={chartData} />
			</span>
			<span class="change">{change}</span>
		</article>
	{/if}
</Card>
