<script context="module">
	export async function preload(page) {
		return {page};
	}
</script>
<script>
	import BitmexHome from '../../components/page-bitmex-home.svelte';
    export let page;
</script>

<BitmexHome page={page} />
