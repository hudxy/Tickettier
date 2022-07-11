<script>
	import ItemList from '../ItemList.svelte';
	import RightBar from '../RightBar.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="box">
	<RightBar />
	<ItemList />
</div>

<style>
	.box {
		display: flex;
	}
</style>
