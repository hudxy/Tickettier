<script>
	import { window_width } from './stores.js';
	let w;
	window_width.subscribe((value) => {
		w = value;
	});
</script>

<article class="card">
	<label for="item">Item Type:</label>
	<select name="item" id="item">
		<option value="bug">Bug</option>
		<option value="user_story">User Story</option>
		<option value="epic">Epic</option>
		<option value="task">Task</option>
	</select>

	<div class="address">
		<slot name="address">
			<span class="missing">Unknown address</span>
		</slot>
	</div>

	<div class="email">
		<slot name="email">
			<span class="missing">Unknown email</span>
		</slot>
	</div>
</article>

<style>
	.card {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
	}

	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 1px solid #ff3e00;
	}

	.address,
	.email {
		padding: 0 0 0 1.5em;
		background: 0 0 no-repeat;
		background-size: 20px 20px;
		margin: 0 0 0.5em 0;
		line-height: 1.2;
	}

	.address {
		background-image: url(/tutorial/icons/map-marker.svg);
	}
	.email {
		background-image: url(/tutorial/icons/email.svg);
	}
	.missing {
		color: #999;
	}
</style>
