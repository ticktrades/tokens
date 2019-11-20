<script>
	import { Nav, Header } from '@fusionstrings/elevate';

	import Logo from '../components/logo.svelte';

	let navList = [
		{ href: '.', title: 'Home', label: 'Home' },
		{ href: 'discover', title: 'Discover', label: 'Discover' },
		{ href: 'bitmex', title: 'Bitmex', label: 'Bitmex' },
		{ href: 'credits', title: 'Credits', label: 'Credits' }
	];
	export let segment;
</script>

<style>
:global(body, h1, h2, h3, h4, h5, h6, .h01, .h02, .h03, .h04, .h05, .h06){
	color: var(--color-lightest);
}
</style>
<Header>
	<Logo href=".">Ticktrades</Logo>
	<span slot="header"></span>
	<Nav {segment} {navList} />
</Header>

<main>
	<slot />
</main>
