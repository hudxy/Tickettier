<script>
	import { compute_slots, get_slot_changes } from 'svelte/internal';

	let shown = false;
	let slotItem;
	let slotStatus;
	export function show() {
		shown = true;
	}
	export function hide() {
		shown = false;
	}
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.keyCode == 27) {
			hide();
		}
	}}
/>

{#if shown}
	<div class="modal-wrapper">
		<div class="modal">
			<span class="close" on:click={() => hide()}>&times;</span>
			<h2>New Item</h2>

			<span bind:this={slotItem} hidden><slot name="item" /></span>
			<label for="item">Item Type:</label>
			<select name="item" id="item">
				{#if slotItem && slotItem.textContent === 'bug'}
					<option value="bug" selected>Bug</option>
				{:else}
					<option value="bug">Bug</option>
				{/if}

				{#if slotItem && slotItem.textContent === 'user_story'}
					<option value="user_story" selected>User Story</option>
				{:else}
					<option value="user_story">User Story</option>
				{/if}

				{#if slotItem && slotItem.textContent === 'epic'}
					<option value="epic" selected>Epic</option>
				{:else}
					<option value="epic">Epic</option>
				{/if}

				{#if slotItem && slotItem.textContent === 'task'}
					<option value="task" selected>Task</option>
				{:else}
					<option value="task">Task</option>
				{/if}
			</select>

			<br />
			<br />

			<label for="title">Title: </label>
			<slot name="title">
				<input type="text" name="title" id="title" />
			</slot>

			<br />
			<br />

			<span bind:this={slotStatus} hidden><slot name="status" /></span>
			<label for="status">Status</label>
			<select name="status" id="status">
				{#if slotStatus && slotStatus.textContent === 'new'}
					<option value="new" selected>New</option>
				{:else}
					<option value="new">New</option>
				{/if}
				{#if slotStatus && slotStatus.textContent === 'active'}
					<option value="active" selected>Active</option>
				{:else}
					<option value="active">Active</option>
				{/if}
				{#if slotStatus && slotStatus.textContent === 'resolved'}
					<option value="resolved" selected>Resolved</option>
				{:else}
					<option value="resolved">Resolved</option>
				{/if}
				{#if slotStatus && slotStatus.textContent === 'closed'}
					<option value="closed" selected>Closed</option>
				{:else}
					<option value="closed">Closed</option>
				{/if}
			</select>

			<br />
			<br />
			<p>Description:</p>
			<slot name="description">
				<textarea style:width="75%" name="desciption" id="description" />
			</slot>
		</div>
	</div>
{/if}

<style>
	.modal-wrapper {
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.6);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.modal {
		background-color: white;
		max-width: 80vw;
		padding: 1rem;
		margin: 15% auto;
		border-top: 5px solid rgba(225, 225, 225, 0.5);
		border-left: 5px solid rgba(225, 225, 225, 0.5);
		border-right: 5px solid rgba(0, 0, 0, 0.2);
		border-bottom: 5px solid rgba(0, 0, 0, 0.2);
	}
	.close {
		float: right;
		cursor: pointer;
	}
	.close:hover {
		font-weight: bold;
	}
</style>
