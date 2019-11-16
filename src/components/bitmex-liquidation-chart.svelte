<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js';
	import Card from './card.svelte';

	export let liquidations;
	export let symbol;
	let totalBuy = 0;
	let totalSell = 0;
	let xbtChartdata = [];

	onMount(async () => {
		for (const [key, value] of Object.entries(liquidations.XBTUSD.data)) {
			let sellValue = 0;
			let buyValue = 0;
			let timestamp = '';

			value.map(item => {
				if (item.side === 'Sell') {
					sellValue += item.leavesQty;
				} else {
					buyValue += item.leavesQty;
				}
				timestamp =
					new Date(
						Number(item.timestamp._seconds + '000')
					).getHours() + ':00';
			});
			const hourlyObject = {
				timestamp: timestamp,
				buy: buyValue,
				sell: sellValue
			};
			xbtChartdata.push(hourlyObject);
		}

		const buyArray = xbtChartdata.map(item => item.buy).reverse();
		const sellArray = xbtChartdata
			.map(item => (item.sell == 0 ? 0 : -1 * item.sell))
			.reverse();
		const buyMaxValue = Math.max(...buyArray);
		const sellMaxValue = -1 * Math.min(...sellArray);
		const graphOffset =
			buyMaxValue > sellMaxValue ? buyMaxValue : sellMaxValue;
		const xbtChartDom = document.getElementById('xbtChart');
		totalBuy = buyArray.reduce((a, b) => a + b, 0);
		totalSell = sellArray.reduce((a, b) => a + -1 * b, 0);
		const configObject = {
			tooltips: {
				enabled: false
			},
			legend: {
				display: false
			},
			scales: {
				xAxes: [{ stacked: true }],
				yAxes: [
					{
						stacked: true,
						ticks: { max: graphOffset, min: -1 * graphOffset }
					}
				]
			}
		};

		const xbtConfigData = {
			labels: xbtChartdata.map(item => item.timestamp).reverse(),
			datasets: [
				{
					label: '',
					data: sellArray,
					backgroundColor: '#f05250'
				},
				{
					label: '',
					data: buyArray,
					backgroundColor: '#26a69a'
				}
			]
		};

		const xbtChart = new Chart(xbtChartDom, {
			type: 'bar',
			data: xbtConfigData,
			options: configObject
		});
	});
</script>

<style>
	.graph-legend {
		display: flex;
		justify-content: center;
	}
	.graph-legend div {
		width: 25%;
		margin: 0 auto;
	}

	.graph-legend .long-block,
	.graph-legend .short-block {
		width: 30px;
		height: 10px;
		margin: 0 auto;
	}

	.graph-legend .long-block {
		background-color: var(--positive);
	}

	.graph-legend .short-block {
		background-color: var(--negative);
	}
	:global(.symbol) {
		font-family: var(--font-family-symbol);
		text-transform: uppercase;
    }
    .symbol{
        text-align: center;
    }
	.price {
        font-weight: 300;
        color: var(--color-lightest);
    }
    .legend-mark{
        text-align: center;
    }
</style>

<Card>
	<h4 class="symbol">XBTUSD <span class="price">{Number(totalBuy + totalSell).toLocaleString()}</span></h4>
	<canvas id="xbtChart" style="width:100%" />
	<div class="graph-legend">
		<div>{Number(totalBuy).toLocaleString()}</div>
		<div class="legend-mark">
			Short
			<div class="long-block" />
		</div>
		<div class="legend-mark">
			Long
			<div class="short-block" />
		</div>
		<div>{Number(totalSell).toLocaleString()}</div>
	</div>
</Card>
