import { writable } from 'svelte/store';

export const window_width = writable(0);

export const fake_data = [
	{
		item: 'user_story',
		title: 'fix app',
		status: 'active',
		description: 'Make this app work.'
	},
    {
		item: 'task',
		title: 'Start work',
		status: 'new',
		description: 'Work on the app.'
	}
];
