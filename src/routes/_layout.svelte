<script>
	import { stores } from '@sapper/app';
	import { Nav, Header } from '@fusionstrings/elevate';

	import Logo from '../components/logo.svelte';

	const { preloading, page, session } = stores();
	let navList = [
		{ href: '.', title: 'Home', label: 'Home' },
		{ href: 'discover', title: 'Discover', label: 'Discover' },
		{ href: 'bitmex', title: 'Bitmex', label: 'Bitmex' },
		{ href: 'credits', title: 'Credits', label: 'Credits' }
	];
	export let segment;
</script>

<style>
	:global(body, h1, h2, h3, h4, h5, h6, .h01, .h02, .h03, .h04, .h05, .h06) {
		color: var(--color-lightest);
	}
	.header-content {
		text-align: center;
		height: var(--header-height);
		line-height: var(--header-height);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.symbol{
		font-size: 2.5rem;
	}
</style>

<Header>
	<Logo href=".">Ticktrades</Logo>

	<div class="header-content">
		{#if $page && $page.params && $page.params.trade}
			<span class="symbol">{$page.params.trade}</span>
		{/if}
	</div>
	<Nav {segment} {navList} />
</Header>

<main>
	<slot />
</main>
