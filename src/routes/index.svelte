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

<svelte:head>
	<title>Ticktrades</title>
</svelte:head>
<Hero
	heading="One platform for seamless crypto-trading."
	subheading="Introducing Ticktrades"
	actions={[{ label: 'Features', href: 'features' }, { label: 'Subscribe', onClick: onClick }]}>

	<img src="images/app-screenshot-big.png" alt="" class="animate-intro" />
</Hero>

<Features>
	<SectionLead title="Features You'll Love.">
		<Lead>
			Lorem ipsum Tempor do Excepteur nulla aute deserunt reprehenderit
			aute commodo aliquip laboris velit eu esse exercitation ex fugiat
			pariatur aute consequat. Lorem ipsum Fugiat mollit quis qui. Lorem
			ipsum Duis Excepteur Duis magna fugiat incididunt qui id quis dolor
			nisi irure proident labore ut in incididunt eiusmod est anim.
		</Lead>
	</SectionLead>

	<FeatureList>
		<FeatureBlock
			order="01."
			title="Portfolio Manager"
			content="Sync your portfolio across exchanges and ticktrades allows
			you to track, manage and analyze your holdings." />

		<FeatureBlock
			order="02."
			title="Unlimited alerts"
			content="Personalised alerts that detects pumps and dumps, sends you technical analysis indicators, changes in volume and price." />

		<FeatureBlock
			order="03."
			title="Trading Terminal"
			content="Place your trades on multiple exchanges, with trading options to place laddering trades and trailing trades." />

		<FeatureBlock
			order="04."
			title="News and social"
			content="Follow the news and chatter over social to keep track of whats making your investments tick." />
		
	</FeatureList>
</Features>
