<script>
	import Modal from './Modal.svelte';
	import { window_width } from './stores.js';
	import { fake_data, convertValue } from './utils.js';

	let data = fake_data;
	let w = 0;
	/**
	 * @type {Modal}
	 */
	let modal;
	let title = '';
	let item = '';
	let status = '';
	let description = '';

	window_width.subscribe((value) => {
		w = value * 0.85;
	});

	/**
	 * @param {{ item: any; title: any; status: any; description: any; }} i
	 */
	function edit(i) {
		title = i.title;
		item = i.item;
		status = i.status;
		description = i.description;
		modal.show();
	}
</script>

<ul>
	{#each data as item}
		<li style="width: {w}px;" on:click={() => edit(item)}>
			<div class="box">
                <div class="{item.item} item"></div>
				<span class="title">{convertValue(item.item)}: {item.title}</span>
				<span class="status">Status: {convertValue(item.status)}</span>
			</div>
		</li>
	{/each}
</ul>
<Modal bind:this={modal}>
	<span slot="item" value={item}>{item}</span>
	<input slot="title" value={title} />
	<span slot="status" value={status}>{status}</span>
	<textarea slot="description" value={description} />
</Modal>

<style>
	ul {
		list-style-type: none;
	}

	li:hover {
		background-color: gray;
	}

	li {
		width: 100%;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
	}

	.box {
		display: flex;
	}
	.title {
		padding: 5px;
		font-size: 16px;
		font-weight: 900;
	}
	.status {
		padding: 5px;
		font-size: 16px;
	}
    .bug {
        background-color: red;
    }
    .user_story {
        background-color: cyan;
    }
    .task {
        background-color: yellow;
    }
    .epic {
        background-color: rgb(255, 10, 255);
    }
    .item {
        width: 10px;
        height: 30px;
    }
</style>
