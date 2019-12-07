<script>
	import Card from './card.svelte';

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
		height: 30vh;
	}
	:global(.trade-news-grid .card) {
		margin-bottom: 10px;
	}
	.meta {
		display: flex;
		justify-content: space-between;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		font-size: 1rem;
	}
	@media only screen and (max-width: 768px) {
		:global(.trade-news-grid) {
			overflow-y: auto;
			height: 26vh;
		}
	}
	.discover-tile p{
		color: #ffaea1;
		margin-bottom: 1rem;
	}
</style>

<div class="trade-news-grid">
	{#each trendingArticles as article}
		<Card>
			<a class="discover-tile" href={article.url}>

				<p>{article.title}</p>

				<!-- <img
				src={article.thumbnail ? article.thumbnail : article.originalImageUrl}
				alt={article.sourceDomain} /> -->
				<div class="meta">
					<span>{article.source.name}</span>
					<span class="time-span">
						{timeConversion(article.publishedAt)}
					</span>
				</div>

			</a>
		</Card>
	{/each}

	{#each techAnalysis as article}
		<Card>
			<a class="discover-tile" href={article.url}>
				<p>{article.title}</p>
				<!-- <img
				src={article.thumbnail ? article.thumbnail : article.originalImageUrl}
				alt={article.sourceDomain} /> -->
				<div class="meta">
					<span>{article.source.name}</span>
					<span class="time-span">
						{timeConversion(article.publishedAt)}
					</span>
				</div>
			</a>
		</Card>
	{/each}
</div>
