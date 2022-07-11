export function convertValue(item) {
	switch (item) {
		case 'bug':
		case 'task':
		case 'epic':
		case 'new':
		case 'active':
		case 'resolved':
		case 'closed':
			return item.charAt(0).toUpperCase() + item.slice(1);
		case 'user_story':
			return 'User Story';
		default:
			return '';
	}
}

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
