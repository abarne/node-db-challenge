exports.seed = function(knex) {
	return knex('tasks').insert([
		{ description: 'Task 1', notes: 'Note 1', completed: 'false', project_id: '1' },
		{ description: 'Task 2', notes: 'Note 2', completed: 'false', project_id: '2' },
		{ description: 'Task 3', notes: 'Note 3', completed: 'false', project_id: '3' }
	]);
};
