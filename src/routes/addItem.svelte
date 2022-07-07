<script>
	import NewItem from '../NewItem.svelte';
	import RightBar from '../RightBar.svelte';
</script>

<svelte:head>
	<title>Home</title>
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
