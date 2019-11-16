<script context="module">
	export async function preload(page) {
		return {page};
	}
</script>

<script>
    import BitmexDetail from '../../components/page-bitmex-detail.svelte';
    export let page;
</script>
<BitmexDetail page={page} />
