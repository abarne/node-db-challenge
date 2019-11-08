exports.seed = function(knex) {
	return knex('projects').insert([
		{ name: 'Project 1', description: 'description 1', completed: 'false' },
		{ name: 'Project 2', description: 'description 2', completed: 'false' },
		{ name: 'Project 3', description: 'description 3', completed: 'false' }
	]);
};
