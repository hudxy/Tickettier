<script>
	import { onMount } from 'svelte';
	import { window_width } from './stores.js';
	let h = 0;
	let w = 0;
	onMount(() => {
		h = window.innerHeight;
		window_width.update((n) => window.innerWidth);
		// w = window.innerWidth * 0.15;
	});

	function updateWidth() {
		window_width.update((n) => window.innerWidth);
		h = window.innerHeight;
	}
	window_width.subscribe((value) => {
		w = value * 0.15;
	});
</script>

<svelte:window on:resize={updateWidth} />

<div style="height: {h}px; width: {w}px;">
	<a href="/">
		<img class="home_img" src="/favicon.png" alt="home" />
	</a>
	<button><a href="/addItem">New Item + </a></button>
</div>

<style>
	div {
		padding: 0px;
		margin: 0px;
		border-top: 5px solid rgba(255, 255, 255, 0.5);
		border-left: 5px solid rgba(255, 255, 255, 0.5);
		border-right: 5px solid rgba(0, 0, 0, 0.2);
		border-bottom: 5px solid rgba(0, 0, 0, 0.2);
		background-color: rgb(214, 214, 209);
		float: left;
	}
	button {
		margin-left: 10%;
		margin-top: 10px;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	.home_img {
		height: 10%;
		widows: 10%;
	}
</style>
