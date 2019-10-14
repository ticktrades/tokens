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

<Header>
	<Logo href=".">Ticktrades</Logo>
	<Nav {segment} {navList} />
</Header>

<main>
	<slot />
</main>
