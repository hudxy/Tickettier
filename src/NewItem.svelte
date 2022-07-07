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
    <br/>
    <br/>
    <label for="title">Title: </label>
    <input type="text" name="title" id="title"/>
    <br/>
    <br/>
    <p>Description: </p>
    <textarea style:width = 75% name="desciption" id="description"></textarea>
</article>

<style>
	.card {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
	}
</style>
