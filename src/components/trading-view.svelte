<script>
	import { beforeUpdate } from 'svelte';
	import loadScript from '../utils/load-scripts.js';

	export let exchange;
	export let symbol;
	export let interval = '15';
	export let timezone = 'Etc/UTC';
	export let theme = 'dark';
	export let style = '1';
	export let locale = 'en';
	export let toolbar_bg = '#f1f3f6';
	export let enable_publishing = false;
	export let hide_top_toolbar = false;
	export let hide_legend = true;
	export let save_image = false;
	export let container_id = 'tradingview-widget';
	export let studies = ['RSI@tv-basicstudies'];

	beforeUpdate(async () => {
		document.querySelector(`#${container_id}`).innerHTML = '';

		const config = {
			autosize: true,
			symbol: `${exchange.toUpperCase()}:${symbol}`,
			interval,
			timezone,
			theme,
			style,
			locale,
			toolbar_bg,
			enable_publishing,
			hide_top_toolbar,
			hide_legend,
			save_image,
			container_id,
			studies
		};

		await loadScript('https://s3.tradingview.com/tv.js');
		new self.TradingView.widget(config);
	});
</script>

<style>
	#tradingview-widget {
		height: 50vh;
	}

	@media only screen and (min-width: 768px) {
		#tradingview-widget {
			height: 40vh;
		}
	}
</style>

<div id="tradingview-widget" />
