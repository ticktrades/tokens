<script>
	export let compact = false;
</script>
<style>
	:global(.card) {
		background: #00132b;
		/* var(--card-background); */
		color: var(--card-text-color);
		border: 1px solid var(--card-background);
		padding: 10px;
	}
	:global(.card h1, .card h2, .card h3, .card h4, .card h5, .card h6, .card .title, .card th){
		color: var(--text-color-tab-selected);
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		font-weight: var(--font-weight-black);
	}
	:global(.symbol-detail #tradingview-widget) {
		grid-column: 1 / span 2;
	}

	:global(.svelte-tabs li.svelte-tabs__tab){
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		font-weight: var(--font-weight-black);
		font-size: 1.2rem;
	}
	:global(.svelte-tabs li.svelte-tabs__selected){
		border-bottom: 2px solid var(--text-color-tab-selected);
		color: var(--text-color-tab-selected);
	}
	:global(.svelte-tabs .svelte-tabs__tab-list){
		border-bottom: 1px solid var(--text-color-tab-selected);
	}

	:global(.card.compact > h6 ){
		color: var(--text-color-heading-hero);
	}
</style>

<article class="card" class:compact>
	<slot />
</article>
