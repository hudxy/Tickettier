<script>
	import NewItem from '../NewItem.svelte';
	import RightBar from '../RightBar.svelte';
</script>

<svelte:head>
	<title>Add Item</title>
</svelte:head>
<div class="box">
	<RightBar />
	<div>
		<NewItem />
	</div>
</div>

<style>
	.box {
		display: flex;
	}
</style>
