<script>
	import {
		Hero,
		Features,
		FeatureList,
		FeatureBlock,
		Lead,
		SectionLead
	} from '@fusionstrings/elevate';

	function onClick() {
		return false;
	}
</script>

<style>
	:global(body, h1, h2, h3, h4, h5, h6, .h01, .h02, .h03, .h04, .h05, .h06) {
		color: var(--text-color-heading);
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero
	heading="One platform for seamless crypto-trading."
	subheading="Introducing Ticktrades"
	actions={[{ label: 'Features', href: '#features' }, { label: 'Subscribe', onClick: onClick }]}>

	<img src="images/app-screenshot-big.png" alt="" class="animate-intro" />
</Hero>

<Features id="features">
	<SectionLead title="Features You'll Love.">
		<Lead>
			Crypto trading platform for
			<em>Bitmex</em>
			with analytical tools and alerts. Helping you to make trades in a
			tick.
		</Lead>
	</SectionLead>

	<FeatureList>
		<FeatureBlock
			order="01."
			title="Alerts"
			content="Get alerts on quick price movements. Customize alerts and
			get notified on every trade filled." />

		<FeatureBlock
			order="02."
			title="Portfolio"
			content="Sync your portfolio across exchanges and track, manage and
			analyze your holdings' performance." />

		<FeatureBlock
			order="03."
			title="News and social"
			content="Get updates on latest trending news, analysis articles from
			leading news sources. We also bring the social chatter around reddit
			and twitter to keep you updated." />

		<FeatureBlock
			order="04."
			title="Analytics"
			content="One trading platform to look at analytics around longs,
			shorts, high volume trades, iquidation that will help you in making
			profitable trades." />

		<FeatureBlock
			order="05."
			title="Secure"
			content="We store minimum required data from users with high end
			encryption on secure cloud." />

		<FeatureBlock
			order="06."
			title="Liquidation protection"
			content="One click solution to close all your positions and convert
			them to BTC. An auto market close position that are running close to
			liquidation." />

	</FeatureList>
</Features>
