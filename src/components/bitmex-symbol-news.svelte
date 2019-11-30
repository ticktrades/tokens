<script>
	export let symbol = '';
	export let trendingArticles = [];
	export let techAnalysis = [];

	function timeConversion(newsTime) {
		const present = new Date().getTime();
		const diff = (present - new Date(newsTime).getTime()) / 1000;
		if (diff < 60) {
			return `${diff} second(s) ago`;
		} else if (60 <= diff && diff < 3600) {
			return `${Math.floor(diff / 60)} minute(s) ago`;
		} else if (3600 <= diff && diff < 216000) {
			return `${Math.round(diff / 3600)} hour(s) ago`;
		} else {
			return `${Math.round(diff / 86400)} day(s) ago`;
		}
	}
</script>

<style>
	:global(.trade-news-grid) {
		overflow-y: auto;
		height: 50vh;
	}
	.meta {
		display: flex;
		justify-content: space-between;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		font-size: 1rem;
	}
	@media only screen and (min-width: 769px) {
		:global(.trade-news-grid) {
			overflow-y: auto;
			height: 26vh;
		}
	}
</style>

<div class="trade-news-grid">
	<h3>News {symbol}</h3>
	{#each trendingArticles as article}
		<a class="discover-tile" href={article.url}>

			<h5>{article.title}</h5>

			<!-- <img
				src={article.thumbnail ? article.thumbnail : article.originalImageUrl}
				alt={article.sourceDomain} /> -->
			<div class="meta">
				<p>{article.source.name}</p>
				<p class="time-span">{timeConversion(article.publishedAt)}</p>
			</div>

		</a>
	{/each}

	{#each techAnalysis as article}
		<a class="discover-tile" href={article.url}>
			<h5>{article.title}</h5>
			<!-- <img
				src={article.thumbnail ? article.thumbnail : article.originalImageUrl}
				alt={article.sourceDomain} /> -->
			<div class="meta">
				<p>{article.source.name}</p>
				<p class="time-span">{timeConversion(article.publishedAt)}</p>
			</div>
		</a>
	{/each}
</div>
